
import React, { useRef } from 'react';
import { Code, Terminal, Braces, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LogoExportProps {
  variant?: 'default' | 'code' | 'terminal' | 'brackets' | 'git';
  size?: number;
  onDownload?: (dataUrl: string, filename: string) => void;
}

const LogoExport = ({ variant = 'default', size = 200, onDownload }: LogoExportProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const renderLogoContent = () => {
    const iconSize = size * 0.12; // Scale icon size relative to overall size
    const fontSize = size * 0.15; // Scale font size relative to overall size
    const corpFontSize = size * 0.06; // Scale corp text size

    switch (variant) {
      case 'code':
        return (
          <g>
            <Code x={size * 0.1} y={size * 0.5} width={iconSize} height={iconSize} className="text-mtechOrange" />
            <text x={size * 0.25} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechOrange">M</text>
            <text x={size * 0.35} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechNavy">Tech</text>
            <Code x={size * 0.7} y={size * 0.5} width={iconSize} height={iconSize} className="text-mtechNavy" />
            <text x={size * 0.85} y={size * 0.75} fontSize={corpFontSize} className="fill-mtechGray-700">CORP</text>
          </g>
        );
      case 'terminal':
        return (
          <g>
            <Terminal x={size * 0.1} y={size * 0.5} width={iconSize} height={iconSize} className="text-mtechOrange" />
            <text x={size * 0.25} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechOrange">M</text>
            <text x={size * 0.35} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechNavy">Tech</text>
            <text x={size * 0.85} y={size * 0.75} fontSize={corpFontSize} className="fill-mtechGray-700">CORP</text>
          </g>
        );
      case 'brackets':
        return (
          <g>
            <Braces x={size * 0.1} y={size * 0.5} width={iconSize} height={iconSize} className="text-mtechOrange" />
            <text x={size * 0.25} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechOrange">M</text>
            <text x={size * 0.35} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechNavy">Tech</text>
            <text x={size * 0.85} y={size * 0.75} fontSize={corpFontSize} className="fill-mtechGray-700">CORP</text>
          </g>
        );
      case 'git':
        return (
          <g>
            <GitBranch x={size * 0.1} y={size * 0.5} width={iconSize} height={iconSize} className="text-mtechOrange" />
            <text x={size * 0.25} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechOrange">M</text>
            <text x={size * 0.35} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechNavy">Tech</text>
            <text x={size * 0.85} y={size * 0.75} fontSize={corpFontSize} className="fill-mtechGray-700">CORP</text>
          </g>
        );
      default:
        return (
          <g>
            <text x={size * 0.1} y={size * 0.55} fontSize={fontSize} fontWeight="bold" fontFamily="monospace" className="fill-mtechOrange">&lt;</text>
            <text x={size * 0.2} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechOrange">M</text>
            <text x={size * 0.3} y={size * 0.55} fontSize={fontSize} fontWeight="bold" className="fill-mtechNavy">Tech</text>
            <text x={size * 0.55} y={size * 0.55} fontSize={fontSize} fontWeight="bold" fontFamily="monospace" className="fill-mtechOrange">/&gt;</text>
            <text x={size * 0.75} y={size * 0.75} fontSize={corpFontSize} className="fill-mtechGray-700">CORP</text>
          </g>
        );
    }
  };

  const downloadSVG = () => {
    if (!svgRef.current) return;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const filename = `mtech-logo-${variant}-${size}px.svg`;
    if (onDownload) {
      onDownload(svgUrl, filename);
    } else {
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = filename;
      downloadLink.click();
      URL.revokeObjectURL(svgUrl);
    }
  };

  const downloadPNG = () => {
    if (!svgRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    canvas.width = size;
    canvas.height = size;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const pngUrl = URL.createObjectURL(blob);
            const filename = `mtech-logo-${variant}-${size}px.png`;
            
            if (onDownload) {
              onDownload(pngUrl, filename);
            } else {
              const downloadLink = document.createElement('a');
              downloadLink.href = pngUrl;
              downloadLink.download = filename;
              downloadLink.click();
              URL.revokeObjectURL(pngUrl);
            }
          }
        }, 'image/png');
      }
      URL.revokeObjectURL(url);
    };
    
    img.src = url;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="capitalize">{variant} Logo - {size}px</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center p-4 border rounded-lg bg-gray-50">
          <svg
            ref={svgRef}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>
              {`
                .text-mtechOrange { fill: #F05A28; }
                .text-mtechNavy { fill: #1E407C; }
                .fill-mtechOrange { fill: #F05A28; }
                .fill-mtechNavy { fill: #1E407C; }
                .fill-mtechGray-700 { fill: #3d4c5f; }
              `}
            </style>
            {renderLogoContent()}
          </svg>
        </div>
        <div className="flex gap-2 justify-center">
          <Button onClick={downloadSVG} variant="outline" size="sm">
            Download SVG
          </Button>
          <Button onClick={downloadPNG} variant="outline" size="sm">
            Download PNG
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogoExport;
