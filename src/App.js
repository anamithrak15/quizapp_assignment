import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Container maxWidth="sm" >
        <Box textAlign="center" mt={5} >
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold" fontStyle={"italic"} >
                Quiz App
                <style>
                  {`body{background-color:#F7DED0;}`}
                </style>
              </Typography>
              <Settings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
