import React from 'react'

function Services() {
  return (
    <div>
        <section>
  <Container maxWidth="lg">
    <Typography component="h2" variant="h3" align="center" gutterBottom>
      What I Can Do For You
    </Typography>
    <Typography component="h3" variant="h5" align="center" gutterBottom>
      Empowering Your Business with Cutting-Edge Solutions
    </Typography>
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={4}>
        <Paper elevation={4} style={{ padding: "2rem", textAlign: "center" }}>
          <WebIcon style={{ fontSize: "4rem", marginBottom: "1rem" }} />
          <Typography component="h4" variant="h6" gutterBottom>
            Build Your Websites, Web Apps, and Mobile Apps
          </Typography>
          <Typography>
            Harness the power of the latest technologies to create stunning, responsive, and user-friendly digital platforms. I can help you design, develop, and deploy custom websites, web apps, and mobile apps tailored to your unique business needs.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={4} style={{ padding: "2rem", textAlign: "center" }}>
          <BusinessCenterIcon style={{ fontSize: "4rem", marginBottom: "1rem" }} />
          <Typography component="h4" variant="h6" gutterBottom>
            Help You Start and Scale Your Business
          </Typography>
          <Typography>
            Leverage my expertise in business strategy, marketing, and operations to transform your business idea into a thriving enterprise. Together, we'll develop and implement scalable strategies to accelerate your growth and maximize your profits.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={4} style={{ padding: "2rem", textAlign: "center" }}>
          <AccountBalanceIcon style={{ fontSize: "4rem", marginBottom: "1rem" }} />
          <Typography component="h4" variant="h6" gutterBottom>
            Learn How to Get the Funding You Need
          </Typography>
          <Typography>
            Secure the financial resources necessary to fuel your business growth. I'll guide you through the process of identifying potential funding sources, crafting compelling pitches, and navigating the world of investment to acquire the capital your business needs to thrive.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
</section>

        </div>
  )
}

export default Services