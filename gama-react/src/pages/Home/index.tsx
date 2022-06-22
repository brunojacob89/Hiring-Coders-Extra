import Header from "../../components/Header";
import Box from "../../components/Box";
import "../../styles/global.css"


function Home() {

 const sendEmail = () => {
  alert("Email enviado com sucesso!");
 };

  return (
    <div className="App">
     <Header />
     <main>
      <Box background="claro">
        <div>
        <h1>Educação Financeira é tudo de bom</h1>
        <p>Vem comigo que te mostro</p>
        <button onClick={sendEmail}>quero saber mais</button>
        </div>
      </Box>
      <Box background="escuro">
      <p>teste</p>
      </Box>
     </main>
    </div>
  );
}

export default Home;