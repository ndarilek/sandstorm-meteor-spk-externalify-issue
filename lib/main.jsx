const {Col, Grid, Nav, Navbar, NavBrand, NavItem, Row} = ReactBootstrap

User = Astro.Class({
  collection: Meteor.users,
  name: "User",
  fields: ["createdAt", "services", "profile"],
  methods: {
    hasPermission: function(permission, defaultValue) {
      if(defaultValue == null)
        defaultValue = false
      if(this.services && this.services.sandstorm && this.services.sandstorm.permissions)
        this.services.sandstorm.permissions.indexOf(permission) != -1
      else
        defaultValue
    }
  }
})

Layout = React.createClass({
  render() {
    return <div>
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Navbar fixedTop={true} toggleNavKey={0}>
              <NavBrand>App</NavBrand>
              <Nav eventKey={0}>
                <NavItem href={FlowRouter.path("home")}>Home</NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <main>
              {this.props.content}
            </main>
          </Col>
        </Row>
      </Grid>
      <footer className="footer">
        <Grid fluid={true}>
          <p>Copyright</p>
        </Grid>
      </footer>
    </div>
  }
})

Home = React.createClass({
  render() {
    return <div>
      <h1>Home</h1>
      <p>Welcome home.</p>
    </div>
  }
})

FlowRouter.route("/", {
  name: "home",
  action: () => ReactLayout.render(Layout, {content: <Home/>})
})