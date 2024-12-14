```javascript
import {useEffect, useState} from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is incorrect because it will add an event listener every time the component renders
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```