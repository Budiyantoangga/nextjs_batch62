import withAuth from "../with-auth"; // Tanpa kurung kurawal
import Menu from "../menu";

function Header() {
    return (
        <div>
            <Menu />
        </div>
    );
}

export default withAuth(Header);
