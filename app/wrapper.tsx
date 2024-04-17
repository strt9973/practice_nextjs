export default function Wrapper(props: { sc: React.ReactNode }) {
  const { sc } = props;
  console.log("Wrapperの実行");
  return <div>{sc}</div>;
}
