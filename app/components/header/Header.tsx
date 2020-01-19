import Link from 'next/link';
import styles from './Header';
import CSS from 'csstype';

const headerStyle: CSS.Properties = {
    width: "100%",
    height: "50px",
    background: "black"
};

const headerLogoStyle: CSS.Properties = {
    maxHeight: "50px"
}

const leftNavStyle: CSS.Properties = {
    listStyle: "none",
    marginBottom: "0"
}

const navLinkStyle: CSS.Properties = {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "1rem",
    color: "#999",
    letterSpacing: "4.2px",
    textTransform: "uppercase",
    textDecoration: "none"
    //     font- family: montserrat;
    // font - weight: 700;
    // font - size: 14px;
    // color: #989898;
    // letter - spacing: 4.2px;
    // text - transform: uppercase;
    // display: flex;
    // align - items: center;
    // transition: color 0.2s ease;
}

const Header = () => (
    // <div>
    //     <Link href="/">
    //         <a style={linkStyle}>Home</a>
    //     </Link>
    //     <Link href="/about">
    //         <a style={linkStyle}>About</a>
    //     </Link>
    // </div>

    <header className="containerFluid" style={headerStyle}>
        <div className="row align-items-center">

            <div className="col">
                <div className="row justify-content-center">
                    <ul style={leftNavStyle}>
                        <li >
                            <Link href="/songs" as={`/songs`}>
                                <a style={navLinkStyle}>Songs</a>
                            </Link>
                        </li>
                    </ul>
                    {/* {{# each leftNavLinks}}
				<li {{#ifeq ../section key}}class="active"{{ else}}{{/ ifeq}}>
					<a href="{{ href }}">{{ label }}</a>
				</li>
                    {{/ each}} */}
                </div>
            </div>
            <div className="col-1">
                <Link href="/" as={`/`}>
                    <a><img src="/images/logo.svg" className="img-fluid" style={headerLogoStyle} /></a>
                </Link>

            </div>
            <div className="col">
                <div className="row hide-for-small-only">


                    {/* {{# each rightNavLinks}}
				<li {{#ifeq ../section key}}class="active"{{ else}}{{/ ifeq}}>
					<a href="{{ href }}">{{ label }}</a>
				</li>
                {{/ each}}
			{{#if user}}
			<li><a href="/keystone/signout">Sign Out</a></li>
                {{ else}}
                <li><a href="/keystone/signin">Sign In</a></li>
                {{/if}} */}
                </div>
            </div>

            {/* {{# each navLinks}} */}
            {/* <li {{#ifeq ../section key}}class="active"{{ else}}{{/ ifeq}}>
										<a href="{{ href }}">{{ label }}</a>
									</li>
								{
    {
        /each}} */}
            {/* </ul > */}
        </div >
        <style jsx>{`
            header{
                width: 100%;
                background: black;
                   height: 50px;
                   marg
            }
            `}</style>
    </header >
);

export default Header;