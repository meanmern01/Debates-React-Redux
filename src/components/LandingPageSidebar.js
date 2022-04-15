import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {withRouter} from "react-router-dom";

function LandingPageSidebar(props) {
    const [chkLoginUserSidebar, setChkLoginUserSidebar] = useState(false);
    console.log("props... ", props.match.path);
    const history = useHistory();
    const stateData = useSelector((state) => {
        return state.user;
    });

    useEffect(() => {
        if (
            localStorage.getItem("debateAccountToken") &&
            localStorage.getItem("id") &&
            localStorage.getItem("email")
        ) {
            setChkLoginUserSidebar(true);
        } else {
            setChkLoginUserSidebar(false);
        }
    }, []);

    const debateClick = () => {
        history.push("/debate");
    };

    const goToHome = () => {
        props.history.push("/");
    };

    return (
        // <div>
        <div className="left_sidebar">
            <div
                className={`side_content ${
                    props.match.path === "/" ||
                    props.match.path === "/userProfile" ||
                    props.match.path === "/profile-video" ||
                    props.match.path === "/profile" ||
                    props.match.path === "/videoChat"
                        ? "active"
                        : ""
                }`}
                style={{
                    cursor: `${
                        props.match.path === "/videoChat" ? "no-drop" : ""
                    }`,
                    pointerEvents: `${
                        props.match.path === "/videoChat" ? "none" : ""
                    }`,
                }}
                onClick={goToHome}
            >
                {props.match.path === "/" ||
                props.match.path === "/userProfile" ||
                props.match.path === "/profile-video" ||
                props.match.path === "/profile" ||
                props.match.path === "/videoChat" ? (
                    <img
                        src={`../assets/images/home_active.png`}
                        alt="homeActive"
                    />
                ) : (
                    <img src={`../assets/images/home.png`} alt="home" />
                )}

                <div>Home</div>
            </div>

            {chkLoginUserSidebar ? (
                <div
                    className={`side_content ${
                        props.match.path === "/debate" ? "active" : ""
                    }`}
                    style={{
                        cursor: `${
                            props.match.path === "/videoChat" ? "no-drop" : ""
                        }`,
                        pointerEvents: `${
                            props.match.path === "/videoChat" ? "none" : ""
                        }`,
                    }}
                    onClick={debateClick}
                >
                    {props.match.path == "/debate" ? (
                        <img
                            src="../assets/images/debates_active.png"
                            alt="debateActive"
                        />
                    ) : (
                        <img
                            src={`../assets/images/debates.png`}
                            alt="debate"
                        />
                    )}
                    <div>Debate</div>
                </div>
            ) : null}
        </div>
        /* </div> */
    );
}

export default withRouter(LandingPageSidebar);
