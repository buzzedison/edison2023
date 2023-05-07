import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const PricingResources = () => {
  return (
    <div className="p-4">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-2">
                Simple Pricing Calculator
              </Typography>
              <Typography variant="body1" className="text-center">
                A straightforward tool for determining a product's pricing based on cost and desired profit margin.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-2">
                Smart Goals Calculator
              </Typography>
              <Typography variant="body1" className="text-center">
                An intuitive calculator that helps you set specific, measurable, achievable, relevant, and time-bound goals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-2">
                Value Pricing Calculator
              </Typography>
              <Typography variant="body1" className="text-center">
                A dynamic pricing calculator which takes into account various market factors to determine a value-based price.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-2">
                Resource Title
              </Typography>
              <Typography variant="body1" className="text-center">
                Subtext describing the resource.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PricingResources;
