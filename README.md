# VeritasCM (Choice Model)

`VeritasCM` is a discrete choice model web application for electric service plan modeling.

Production build can be found [here](https://veritaseconomics.netlify.app/).


## Background: Discrete Choice Model

Despite the substantial potential for residential demand response through Time of Use (TOU) rates, TOU offerings are limited. When utilities do offer TOU rates, uptake can range from almost zero to over 40 percent. Residential demand response is challenging because it requires enrolling many households to be effective. Veritas overcomes this challenge by combining advanced customer contact and survey research techniques with sophisticated econometric and simulation modeling to estimate load change potential by market segment, hour, census block, and appliance. We use this information to develop market strategies that induce adoption of time-based rates that are cost-effective and achieve utility objectives.

This web application implements a logit [discrete choice model](https://eml.berkeley.edu/books/train1201.pdf), based on coefficients gathered through survey data.

  
  
## Usage

  
## Tech Stack

**Front-end:** React, Leaflet, Bootstrap

**Back-end:** Django Rest Framework, Numpy, Pandas

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  