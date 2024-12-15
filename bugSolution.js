```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Component mounted');
    return () => {
      // Cleanup function
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    }
  }, [])

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```