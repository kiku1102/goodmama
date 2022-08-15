import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BreadCrumb({ breadcrumbArray, pageName }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    // event.preventDefault();
    navigate(`${event.target.href}`);
  };
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" mt={2} ml={1} mb={3}>
        {breadcrumbArray.map((link, index) => (
          <Link underline="hover" color="inherit" href={link.url} key={index}>
            {link.name}
          </Link>
        ))}
        {
          { pageName } ? <Typography color="text.primary">{pageName}</Typography> : null
        }
      </Breadcrumbs>
    </div>
  );
}
export default BreadCrumb;
