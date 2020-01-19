import Link from 'next/link';
import styles from './Header';
import CSS from 'csstype';

const headerStyle: CSS.Properties = {
    width: "100%",
    height: "50px",
    background: "black"
};


const Header = () => (
    // <div>
    //     <Link href="/">
    //         <a style={linkStyle}>Home</a>
    //     </Link>
    //     <Link href="/about">
    //         <a style={linkStyle}>About</a>
    //     </Link>
    // </div>

    <header style={headerStyle}>
        <div className="row expanded align-middle">

            <div className="small-4 columns">
                <div className="row">

                    {/* {{# each leftNavLinks}}
				<li {{#ifeq ../section key}}class="active"{{ else}}{{/ ifeq}}>
					<a href="{{ href }}">{{ label }}</a>
				</li>
                    {{/ each}} */}
                </div>
            </div>
            <div className="columns grow">
                {/* <a className="logo" href="/"><img src="/images/logo.svg" /></a> */}
            </div>
            <div className="small-4 columns">
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