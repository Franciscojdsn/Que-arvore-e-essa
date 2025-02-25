import ImagensArvores from "./components/info/ImagensArvores"
import PauBrasil from "./assets/Captura de tela 2025-01-31 212118.jpg"
import DetalhesPauBrasil from "./assets/6.png"
import AmesclaDeCheiro from "./assets/7.png"
import DetalhesAmesclaDeCheiro from './assets/8.png'
import BiribaBranca from './assets/9.png'
import DetalhesBiribaBranca from './assets/10.png'
import PauPombo from './assets/11.png'
import DetalhesPauPombo from './assets/12.png'


export default function Home() {

    return (
        <>
            <div className="container-arvores">
                <h1>Espécies arbóreas na trilha das lianas do Parque Estadual Dois Irmãos</h1>
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={PauBrasil} />
                <ImagensArvores imagem={DetalhesPauBrasil} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={AmesclaDeCheiro} />
                <ImagensArvores imagem={DetalhesAmesclaDeCheiro} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={BiribaBranca} />
                <ImagensArvores imagem={DetalhesBiribaBranca} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={PauPombo} />
                <ImagensArvores imagem={DetalhesPauPombo} />
            </div>
        </>

    )

}