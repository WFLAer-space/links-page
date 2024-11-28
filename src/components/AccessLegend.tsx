import React from 'react';
import { ShieldCheck, ShieldAlert, ShieldOff } from 'lucide-react';

export function AccessLegend() {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-green-500" />
        <span className="text-sm text-gray-600 dark:text-gray-400">无需VPN访问</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldAlert className="w-5 h-5 text-yellow-500" />
        <span className="text-sm text-gray-600 dark:text-gray-400">可直接访问，但使用VPN可显著提速</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldOff className="w-5 h-5 text-red-500" />
        <span className="text-sm text-gray-600 dark:text-gray-400">需要VPN访问</span>
      </div>
    </div>
  );
}