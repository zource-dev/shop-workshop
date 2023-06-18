export default function Button({ value, setValue }) {
    const handleClick = function() {
      setValue(Math.random());
    };

    return <button onClick={handleClick}>{value}</button>;
}
