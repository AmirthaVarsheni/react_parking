import SpendeeLogo from '../../assets/logo.png';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isValid = location.pathname !== "/spendee/login";
  const isExpenseForm = location.pathname !== "/spendee/expenseForm";
  const navigateToForm = () => {
    navigate(`/spendee/expenseForm`)

  }

  return (
    <>
      <div className="header-layout">
        <div className="txt-layout">
          <img src={SpendeeLogo} alt="Spendee Logo" className="logoImg" />
          <div className="head-text">Spendee</div>
        </div>

        {isValid && (

          <Breadcrumbs className="breadcrumbs" aria-label="breadcrumb" separator={null}>
            {isExpenseForm && (
              <Button
                variant="contained"
                color="primary"
                onClick={navigateToForm}
                className="button-keys"
              > Create Expense
              </Button>
            )}

            <Link
              className="li-text"
              href="https://help.spendee.com/"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </Link>
            <Link
              className="li-text"
              href="https://medium.com/spendee"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
            <Link
              className="li-text"
              href="https://www.spendee.com/bank-connect"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bank Connect
            </Link>

            <Link
              className="li-text"
              component={RouterLink}
              to="/user-profile"
              underline="none"
            >
              UserProfile
            </Link>
          </Breadcrumbs>

        )}
      </div>

      <style>
        {`
          .header-layout {
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .logoImg {
            height: 70px;
          }

          .txt-layout {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }

          .head-text {
            font-size: 20px;
            font-family: fantasy;
          }

          .breadcrumbs {
            color: #fff;
          }

          .li-text {
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
}

export default Header;
