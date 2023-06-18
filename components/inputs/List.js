import Button from './Button';

export default function List({ value, setValue }) {
  return (<>
    <Button value={value} setValue={setValue} />
    <Button value={value} setValue={setValue} />
    <Button value={value} setValue={setValue} />
  </>);
}
