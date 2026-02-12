import "./Header.css"
import { useState } from "react";
import type { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "./redux/appSlice";
import { clearJournal } from "./redux/journalSlice";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const loggedIn = useSelector((state: RootState) => state.app.loggedIn);

    if (!loggedIn) {
      return (
        <div></div>
      );
    }

    return (
        <div className="header-container">
            <div className="app-name">Dev Journey</div>

            <div className="user-menu-container">

                <button className="user-button" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                  <div className="user-avatar">
                      <span className="user-avatar-icon">👤</span>
                  </div>
                </button>
                
                {isUserMenuOpen && (
                  <div className="user-menu">
                    <button className="user-menu-item logout" onClick={() => {
                      dispatch(logout());
                      dispatch(clearJournal()); 
                      navigate("/"); 
                      setIsUserMenuOpen(!isUserMenuOpen);

                    }}>
                      <span className="user-menu-icon">⤴</span>
                      Logout
                    </button>
                  </div>
                )}
                
              </div>

        </div>

    )
}

export default Header;