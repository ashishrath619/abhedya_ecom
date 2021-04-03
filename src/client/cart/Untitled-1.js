<div>
  <table style={{ alignItems: "center", textAlign: "center" }}>
    <Grid container>
      <Grid item xs={12} sm={7}>
        <thead>
          <tr>
            <th style={{ padding: "0.5rem 2rem" }}>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={7}>
        <tbody>
          <tr>
            <td>
              <img
                src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/14_5401_5408/pdp/notebooks-inspiron-14-5401-5408-laptop-pdp-design-gallery504x350_silver.jpg?fmt=jpg&wid=570&hei=400"
                width="50px"
              />
              dell
            </td>
            <td>100</td>
            <td>
              <Qtyctrl />
            </td>
            <td>200</td>
            <td>
              <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
              >
                <ClearIcon />
              </IconButton>
            </td>
          </tr>
          <tr>
            <td>dell</td>
            <td>100</td>
            <td>2</td>
            <td>200</td>
          </tr>
        </tbody>
      </Grid>
    </Grid>
  </table>
</div>;
