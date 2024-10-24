"use client";

import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import { Box, Flex, rem, Text } from '@mantine/core';
import { primaryColor, white } from '../../../public/colors';

interface MapProps {
  mapWidth?: number;
  mapHeight?: number;
  onProvinceClick?: (Province_id: string) => void;
  style?: React.CSSProperties;
  province: string | null;
}

const Map: React.FC<MapProps> = ({ mapWidth, mapHeight, onProvinceClick, province }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  useEffect(() => {
    fetch('/assets/images/IndonesiaMap/indonesiaHighNew_Papua.svg')
      .then(response => response.text())
      .then(setSvgContent)
      .catch(error => {
        console.error('Error fetching SVG:', error);
      });
  }, []);

  useEffect(() => {
    if (svgContent && province) {
      console.log('province', province);
      const svgContainer = document.getElementById('svg-map');
      if (svgContainer) {
        const svgElement = svgContainer.querySelector('svg');
        if (svgElement) {
          resetAllColors();
          setHoveredProvince(null)
          handleColor(svgElement, province, primaryColor);
        }
      }
    }
  }, [svgContent, province]);

  const resetAllColors = () => {
    if (svgContent) {
      const svgContainer = document.getElementById('svg-map');
      if (svgContainer) {
        const svgElement = svgContainer.querySelector('svg');
        if (svgElement) {
          const paths = svgElement.querySelectorAll('path');
          paths.forEach((path) => {
            (path as SVGPathElement).style.fill = '';
          });
        }
      }
    }
  };

  useEffect(() => {
    if (svgContent) {
      const svgContainer = document.getElementById('svg-map');

      if (svgContainer) {
        const svgElement = svgContainer.querySelector('svg');

        if (svgElement && selectedProvince) {
          handleColor(svgElement, selectedProvince, primaryColor);
        }

        if (svgElement) {
          const paths = svgElement.querySelectorAll('path');

          const handleMouseEnter = (event: MouseEvent) => {
            const path = event.currentTarget as SVGPathElement;
            const provinceName = path.getAttribute("title");
            const idProvinces = path.getAttribute("id");

            if (provinceName && idProvinces) {
              setHoveredProvince(provinceName);
              setPosition({ x: event.clientX, y: event.clientY });
              path.style.cursor = "pointer";
            }
          };

          const handleClick = (event: MouseEvent) => {
            const path = event.currentTarget as SVGPathElement;
            const Province_id = path.getAttribute('id');
            if (Province_id && onProvinceClick) {

              resetAllColors();
              handleSelectedProvince(Province_id);
              onProvinceClick(Province_id);
            }
          };

          paths.forEach((path) => {
            path.addEventListener('mouseenter', handleMouseEnter);
            path.addEventListener('click', handleClick);
          });

          return () => {
            paths.forEach((path) => {
              path.removeEventListener('mouseenter', handleMouseEnter);
              path.removeEventListener('click', handleClick);
            });
          };
        }
      }
    }
  }, [svgContent, hoveredProvince, position]);

  const handleColor = (svgElement: SVGElement, selectedProvince: string, color: string) => {
    const selectedPath = svgElement.querySelector(`path#${selectedProvince}`);
    if (selectedPath) {
      (selectedPath as SVGPathElement).style.fill = color;
    }
  }

  const handleSelectedProvince = (province: string) => {
    setSelectedProvince(province);
  }

  const provinceNameBox = (
    <Flex style={{ position: "absolute", top: position.y, left: position.x }} direction={'column'} align={'center'} justify={'center'}>
      <Box bg={white} px={rem(20)} py={rem(4)}>
        <Text style={{ fontSize: rem(10) }}>{hoveredProvince}</Text>
      </Box>
      {/* <div style={{ width: rem(1), height: rem(100), backgroundColor: white }} /> */}
    </Flex>
  );

  return (
    <div>
      <div
        id="svg-map"
        dangerouslySetInnerHTML={{ __html: svgContent || '' }}
        style={{ width: mapWidth ? mapWidth : '100%', height: 'auto' }}
      />
      <div>
        {/* x: {position.x}, y: {position.y} */}
      </div>
      {hoveredProvince && provinceNameBox}
    </div>
  );
};

export default Map;