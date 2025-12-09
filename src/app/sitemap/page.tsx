"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, Home, Star } from 'lucide-react';

const Sitemap = () => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root', 'app', 'services', 'product']));

  const toggleNode = (id) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const sitemapData = {
    id: 'root',
    name: 'Website Structure',
    type: 'root',
    children: [
      {
        id: 'home',
        name: 'Home',
        type: 'page',
        path: '/'
      },
      {
        id: 'aboutus',
        name: 'About Us',
        type: 'page',
        path: '/AboutUs'
      },
      {
        id: 'blog',
        name: 'Blog',
        type: 'page',
        path: '/Blog'
      },
      {
        id: 'careers',
        name: 'Careers',
        type: 'page',
        path: '/careers'
      },
      {
        id: 'connect',
        name: 'Connect',
        type: 'page',
        path: '/connect'
      },
      {
        id: 'portfolio',
        name: 'Portfolio',
        type: 'page',
        path: '/Portfolio'
      },
      {
        id: 'privacypolicy',
        name: 'Privacy Policy',
        type: 'page',
        path: '/PrivacyPolicy'
      },
      {
        id: 'product',
        name: 'Product',
        type: 'section',
        path: '/Product',
        children: [
          {
            id: 'chopada',
            name: 'Chopada',
            type: 'page',
            path: '/Product/chopada'
          },
          {
            id: 'erpmodule',
            name: 'ERP Module',
            type: 'page',
            path: '/Product/erpModule'
          }
        ]
      },
      {
        id: 'services',
        name: 'Services',
        type: 'section',
        path: '/services',
        children: [
          {
            id: 'appdevelopment',
            name: 'App Development',
            type: 'page',
            path: '/services/appDevelopment'
          },
          {
            id: 'digitalmarketing',
            name: 'Digital Marketing',
            type: 'page',
            path: '/services/digitalMarketing'
          },
          {
            id: 'erpsystem',
            name: 'ERP System',
            type: 'page',
            path: '/services/erpSystem'
          },
          {
            id: 'seoenhancement',
            name: 'SEO Enhancement',
            type: 'page',
            path: '/services/seoEnhancement'
          },
          {
            id: 'webdevelopment',
            name: 'Web Development',
            type: 'page',
            path: '/services/webDevelopment'
          }
        ]
      },
      {
        id: 'termsandconditions',
        name: 'Terms and Conditions',
        type: 'page',
        path: '/TermsAndConditions'
      }
    ]
  };

  const NodeItem = ({ node, level = 0 }) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isRoot = node.type === 'root';

    return (
      <div className="select-none">
        <div
          className={`flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-200 ${
            isRoot 
              ? 'bg-white text-black mb-6' 
              : 'hover:bg-white/5 cursor-pointer'
          }`}
          style={{ marginLeft: `${level * 24}px` }}
          onClick={(e) => {
            if (isRoot) return;
            if (hasChildren) {
              toggleNode(node.id);
            }
            if (node.path && node.type === 'page') {
              window.open(node.path, '_blank');
            }
          }}
        >
          {hasChildren && !isRoot && (
            <div className="w-5 h-5 flex items-center justify-center">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-white/60" />
              ) : (
                <ChevronRight className="w-4 h-4 text-white/60" />
              )}
            </div>
          )}
          
          {!hasChildren && !isRoot && (
            <div className="w-5 h-5" />
          )}

          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
            {isRoot ? (
              <Home className="w-4 h-4 text-black" />
            ) : node.type === 'section' ? (
              <Folder className="w-4 h-4 text-white" />
            ) : (
              <FileText className="w-4 h-4 text-white/80" />
            )}
          </div>

          <div className="flex-1">
            <div className={`font-medium ${isRoot ? 'text-lg' : 'text-sm'}`}>
              {node.name}
            </div>
            {node.path && !isRoot && (
              <div className="text-xs text-white/40 mt-0.5 font-mono">
                {node.path}
              </div>
            )}
          </div>

          {node.type === 'page' && !isRoot && (
            <Star className="w-3.5 h-3.5 text-white/20" />
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1">
            {node.children.map((child) => (
              <NodeItem key={child.id} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen mt-30  bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Site Structure</h1>
          {/* <p className="text-white/50 text-sm">
            Complete navigation hierarchy of your Next.js application
          </p> */}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <NodeItem node={sitemapData} />
        </div>

        <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
          <h3 className="text-sm font-semibold mb-4 text-white/80">Statistics</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold">10</div>
              <div className="text-xs text-white/50 mt-1">Total Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold">2</div>
              <div className="text-xs text-white/50 mt-1">Sections</div>
            </div>
            <div>
              <div className="text-2xl font-bold">7</div>
              <div className="text-xs text-white/50 mt-1">Service Pages</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;