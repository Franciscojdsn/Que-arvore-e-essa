import Perfil from "../../assets/foto perfil bext.jpg"
import Parceiros from "../../assets/Design sem nome (2).png"

export default function Navbar() {

    return (
        <>
            <div className="navbar">
                <div className="acima">
                    <div className="item1">
                        <img src={Perfil} alt="LogoProjeto" className="imagem-navbar" />
                    </div>
                    <div className="item3">
                        <img src={Parceiros} alt="parceiros" className="imagem-parceiros" />
                    </div>
                </div>
                <div className="item2">
                    <h1>Que árvore é essa?</h1>
                </div>
            </div>
        </>
    )

}