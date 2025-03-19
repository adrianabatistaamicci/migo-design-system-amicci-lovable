
import React, { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  path: string;
  section: string;
}

// Mock search results for now
const mockResults: SearchResult[] = [
  { title: 'Button', path: '/components/buttons', section: 'Components' },
  { title: 'Card', path: '/components/cards', section: 'Components' },
  { title: 'Typography', path: '/components/typography', section: 'Components' },
  { title: 'Colors', path: '/foundations/colors', section: 'Foundations' },
  { title: 'Installation', path: '/installation', section: 'Getting Started' },
];

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter results based on search query
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = mockResults.filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.section.toLowerCase().includes(query.toLowerCase())
    );
    
    setResults(filtered);
    setSelectedIndex(filtered.length > 0 ? 0 : -1);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      handleSelect(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    onClose();
    setQuery('');
  };

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        <div className="p-4 border-b border-mui-divider">
          <div className="flex items-center gap-2">
            <SearchIcon className="h-5 w-5 text-mui-text-secondary" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search documentation..."
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={() => setQuery('')}
              className={`text-mui-text-secondary ${query ? 'opacity-100' : 'opacity-0'}`}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto">
            <div className="py-2">
              {results.map((result, index) => (
                <div
                  key={result.path}
                  className={`
                    px-4 py-2 cursor-pointer text-sm 
                    ${index === selectedIndex ? 'bg-mui-hover' : 'hover:bg-mui-hover'}
                  `}
                  onClick={() => handleSelect(result)}
                >
                  <div className="font-medium text-mui-text-primary">
                    {result.title}
                  </div>
                  <div className="text-xs text-mui-text-secondary">
                    {result.section}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-4 text-center text-mui-text-secondary">
            No results found
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Search;
