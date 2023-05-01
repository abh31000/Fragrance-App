import Page from "./components/Page";
import Socials from "./components/Socials";

export default function App() {
   return (
      <>
         <div className="flex">
         <Socials></Socials>
         <Page></Page>
         </div>
      </>
   );
}