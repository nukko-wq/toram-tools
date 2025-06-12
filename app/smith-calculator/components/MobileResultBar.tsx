'use client';

import type { SmithingResult } from '../lib/types';

interface MobileResultBarProps {
  result: SmithingResult;
}

export default function MobileResultBar({ result }: MobileResultBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-3 z-50 md:hidden">
      <div className="flex justify-between items-center text-sm">
        <div className="flex-1 text-center">
          <div className="text-lg font-bold text-blue-600">
            {(Math.floor(result.successRate * 10) / 10).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-600">成功率</div>
        </div>
        
        
        <div className="flex-1 text-center border-l border-gray-200">
          <div className="text-lg font-bold text-purple-600">
            {Math.floor(result.finalPotential)}
          </div>
          <div className="text-xs text-gray-600">最終潜在値</div>
        </div>
      </div>
    </div>
  );
}