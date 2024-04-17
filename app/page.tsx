import ServerComponent from './serverComponent';
import { SwitchTheme } from './switchTheme';
import Wrapper from './wrapper';

export default function Home() {
  console.log("実行");
  return (
    <>
      <p>Component</p>
      <Wrapper sc={<ServerComponent />} />
      <SwitchTheme />
    </>
  );
}
