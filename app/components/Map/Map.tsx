"use client";

import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import { Box, Flex, rem, Text } from '@mantine/core';
import { white } from '../../../public/colors';
import { title } from 'process';

interface MapProps {
  mapWidth?: number;
  mapHeight?: number;
  onProvinceClick?: (provinceName: string) => void;
  style?: React.CSSProperties;
}

const Map: React.FC<MapProps> = ({ mapWidth, mapHeight, onProvinceClick }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [prevHoveredProvince, setPrevHoveredProvince] = useState<{ province: string, x: number | null, y: number | null } | null>(null);

  useEffect(() => {
    fetch('/assets/images/IndonesiaMap/indonesiaHighNew_Papua.svg')
      .then(response => response.text())
      .then(setSvgContent)
      .catch(error => {
        console.error('Error fetching SVG:', error);
      });
  }, []);

  useEffect(() => {
    if (svgContent) {
      const svgContainer = document.getElementById('svg-map');

      if (svgContainer) {
        const svgElement = svgContainer.querySelector('svg');

        if (svgElement) {
          const paths = svgElement.querySelectorAll('path');

          const handleMouseEnter = (event: MouseEvent) => {
            const path = event.currentTarget as SVGPathElement;
            const provinceName = path.getAttribute('title');
            const idProvinces = path.getAttribute('id');
            if (provinceName && provinceName != prevHoveredProvince?.province && idProvinces && isIDProvince(idProvinces)) {
              const { clientX, clientY } = event;
              setHoveredProvince(provinceName);
              if (hoveredProvince) {
                if (prevHoveredProvince?.province !== hoveredProvince) {
                  setPosition({ x: clientX, y: clientY });
                  setPrevHoveredProvince({ province: hoveredProvince, x: clientX, y: clientY });
                }
              }
            }
          };

          const handleMouseLeave = () => {
            setHoveredProvince(null);
          };

          const handleClick = (event: MouseEvent) => {
            const path = event.currentTarget as SVGPathElement;
            const provinceName = path.getAttribute('title');
            if (provinceName && onProvinceClick) {
              onProvinceClick(provinceName);
            }
          };

          paths.forEach((path) => {
            path.addEventListener('mouseenter', handleMouseEnter);
            path.addEventListener('mouseleave', handleMouseLeave);
            path.addEventListener('click', handleClick);
          });

          // Cleanup event listeners on component unmount
          return () => {
            paths.forEach((path) => {
              path.removeEventListener('mouseenter', handleMouseEnter);
              path.removeEventListener('mouseleave', handleMouseLeave);
              path.removeEventListener('click', handleClick);
            });
          };
        }
      }
    }
  }, [svgContent, hoveredProvince, position]);

  const provinceNameBox = (
    <Flex style={{ position: "absolute", top: position.y, left: position.x }} direction={'column'} align={'center'} justify={'center'}>
      <Box bg={white} px={rem(20)} py={rem(4)}>
        <Text style={{ fontSize: rem(10) }}>{hoveredProvince}</Text>
      </Box>
      {/* <div style={{ width: rem(1), height: rem(100), backgroundColor: white }} /> */}
    </Flex>
  );

  function isIDProvince(provinceName: string) {
    return provinceName.split('-')[0] === 'ID';
  }

  return (
    <div>
      <div
        id="svg-map"
        dangerouslySetInnerHTML={{ __html: svgContent || '' }}
        style={{ width: mapWidth ? mapWidth : '100%', height: 'auto' }}
      />
      {hoveredProvince && provinceNameBox}
    </div>
  );
};

export default Map;