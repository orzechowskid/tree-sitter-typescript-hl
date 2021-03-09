import React from 'react';

const ComponentA = () => (
    <span>hello from component A</span>
);

const ComponentB = () => (
    <div>hello from component B</span>
);

const App = () => {
    const [ foo, setFoo ] = useState<boolean>(false);

    useEffect(() => {
	setTimeout(() => setFoo(true), 2000);
    }, []);

    return (
	<div>
	    <span>hello from app</span>
	    {foo ? <ComponentA /> : <ComponentB />}
	</div>
    );
}

export default App;
