import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
  return (
    <div className="header">
      
      <div className="logo-container">
       <img className="logo" alt="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
           <li className="home">Home</li>
           <li className="aboutus">About Us</li>
           <li className="contactus">Contact Us</li>
           <li className="cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) =>{
  const {resData} = props;
  const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData?.info ;
  return (
 <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
   <img className="res-logo" 
   alt="res-logo" 
   src={
  "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661028114/" + cloudinaryImageId
   } />
   <h3>{name}</h3>
   <h4>{cuisines.join(",")}</h4>
   <h4>{avgRating} stars</h4>
   <h4>{costForTwo}</h4>
   <h4>{deliveryTime} minutes</h4>
 </div>
  );
};

const resList = [
                  {
                    "info": {
                      "id": "234875",
                      "name": "Adil Hotel",
                      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                      "locality": "Rautha Wada",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹150 for two",
                      "deliveryTime": 37,
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 4.3,
                      "parentId": "27123",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.3K+",
                      "sla": {
                        
                        "lastMileTravel": 11.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "11.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-13 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "151515",
                      "name": "Gupta Bhojnalay",
                      "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
                      "locality": "fulwara chowk",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹200 for two",
                      "deliveryTime": 41,
                      "cuisines": [
                        "Fast Food",
                        "Indian",
                        "Beverages"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "91635",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "449",
                      "sla": {
                        
                        "lastMileTravel": 11,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-12 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "151648",
                      "name": "Mr. Gurung Momo & Chinese Corner",
                      "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
                      "locality": "Teacher's Colony",
                      "areaName": "Mohan Nagar",
                      "costForTwo": "₹150 for two",
                      "deliveryTime": 42,
                      "cuisines": [
                        "Momos",
                        "Chinese",
                        "Fast Food"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "140255",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        
                        "lastMileTravel": 12.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "12.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-12 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "184424",
                      "name": "Sab Ghar Tak Foods",
                      "cloudinaryImageId": "ryzswg44bt7thqzkuaj4",
                      "locality": "Sanchar Colony",
                      "areaName": "Parsia Road",
                      "costForTwo": "₹200 for two",
                      "deliveryTime": 46,
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "173932",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "617",
                      "sla": {
                        
                        "lastMileTravel": 14.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "14.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-12 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "658210",
                      "name": "The Fusion Lounge",
                      "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
                      "locality": "Triloki nagar",
                      "areaName": "Railway Station",
                      "costForTwo": "₹300 for two",
                      "deliveryTime": 45,
                      "cuisines": [
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "395453",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "350",
                      "sla": {
                        
                        "lastMileTravel": 10.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "10.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-12 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "150591",
                      "name": "Satkar Restaurant",
                      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
                      "locality": "Sinchai Colony",
                      "areaName": "Satkar Chowk",
                      "costForTwo": "₹250 for two",
                      "deliveryTime": 44,
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Indian",
                        "Salads",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "21553",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.9K+",
                      "sla": {
                        
                        "lastMileTravel": 13.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "13.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-12 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "385824",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                      "locality": "Sinchai Colony",
                      "areaName": "Mohan Nagar",
                      "costForTwo": "₹200 for two",
                      "deliveryTime": 50,
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "312",
                      "sla": {
                        
                        "lastMileTravel": 13.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "13.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-12 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
                      "type": "WEBLINK"
                    }
                  },
                ];

const Body = () =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="btn" >
        <input type="button" value="Search" />
      </div>

      <div className="res-container">
         {
           resList.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
           ))
         }
        </div>
      </div>
    
  );
};

const AppLayout = () => {
  return(
    <div className="app">
    <Header />
    <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);