// Run this file: right click > run code
const fs = require('firebase-admin');

fs.initializeApp({
  credential: fs.credential.cert(
    {
      "type": "service_account",
      "project_id": "stackmi",
      "private_key_id": "724da3e73c4cb85c2b6f3506cf3306c6571eac75",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDheX67Gouxt37I\nzuVTd7zBhofRQIS1mHwg+7Pozbr5N7fZx0ReY47Fkb3z2lHvXAP8HkmEM3pS1Vx/\nJC7yLCLABy9nXsKq6INpD0Hyjwc0f7ynKLzKaira3G0Fwo2OzN9x4LDSDKicJ/06\nG/YtflMbAK0GpnxDXG2sDv85/NV+J/MOESyaNOJWW0BZBQ73U+RFf7gU/PpSs7p7\nvII+BChl4M6g+a9NOE1qKT9mf/8Ti1O1226XCmZ4pyTsj+BJa6jobZkvgFUZMGjn\nCNGEdJOZNFg7Paz4b26RrDtSu2z7HMCJgYPjnN+V+pQflSOxzsj/aO192/eTSMW0\nJ+4kH2lRAgMBAAECggEADZmXdE+wl2KbCh+4o2U4hG/J52w91PpCmna0Llmian/a\n3g7v58WXigE1dOz5PjfNobpt8sRsH2zxLFYRYtgYrH6CdHi5wzdNHdwmvSu1YoxF\n48tIP+lRdmwPQ2atxSxEWgkUgUb0MJ8U3hlrqujQuHM8/Ia0PhfoIZWx/VxrwDUp\npMi7vK342IyEZOPOBv59sE6gol7jQhPFvUha8aCt1Y6OMg/03CFeBfqsX1HfVsd4\n0nyyoBaiudM42s0+w7LYUkgyfkLJ7niwl9b8SQqkq8Zgz7oFN2/L0zBpmUIV4idF\n7BeErACWq64pYFZvJ5m5Eb6f+iGdMicIUW1AI7LwAQKBgQD9XQ0GilVrThFDVomq\nKuhzI/o5oZZhk9uTveibbVtZhQ1ugjpoMiBSqbUHAGgXNDGhtry5I4S91+73HMu3\noZw1XThhNZty9VNuXT4slgtOQe+SYxXafzJxfLcLPXrr9VFmPBM5/DXEUbqsE6B/\nSgToDbnFxVZUmmUDFwyp/vmDAQKBgQDj0iY+czwrKeBd7jLufkjQuy2/Jadhs3HG\nso2fD6GnjZUn/0N1umQQS3NbC92UB5RD10IgMO5TDHwqkm5g77hlKJuvXZuPv1Bg\n5Bh6k209abjqfgTrcRPZNIu0vBi7SsEuLTdSayymCCmPa+D83dsPzPwLXwyDMJG+\nDPoB1Ur2UQKBgQC49olf0PVzFNb9dduiYxi3lfhCwnhqW+rc/LMnZLpfrAaWOnQx\nRQbb0hDaP6294tio2iMEda2eell2BYujT1QekSNrtBr73aU+2Mte+Vrfkrs2/ych\nD+LfftCSYBuwzrLSE+FlX35RB+ljXiC5TGwwjHSmsN3Jfb1oeBdCs2WsAQKBgQCZ\nXuiQMlPXWyHJGor/M9UhcGGjxV2h0IRQF/RvmL5jZlV7z8VChHDI54KJULui5FdU\nNJ43vbkz/7u3jUzxxXCF6YilzobjhxA9qlEwc/+e0IXEl4IIXt/V4iILUnXz4Kec\nxqPvwGcWf3g7LY0RrunDAWTM4vgxeYkkQOguQ8FrgQKBgQDjlhYoBzqGK3YOVTEe\ntfymP4j9NKPrIfoZ/L2v6Y7rSNjX8LhO1qvVkukKsF6w7vaK1DLA7H68u044IivU\noqN+dF6DmbmHG81tl9kYmW1N5hUizTiex73etMrPWEeWVWfj+Eunhu2ohcvQy15u\nAl7mRjKpAtY80NAnIGq59CY5bg==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-1xf5m@stackmi.iam.gserviceaccount.com",
      "client_id": "101875739796379272698",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1xf5m%40stackmi.iam.gserviceaccount.com"
    }
  )
});

const db = fs.firestore();

var angularSeries = {
  "course_title": "Angular Tutorial",
  "course_slug": "ng-intro",
  "course_list": [
    {
      "topic_list_id": "1",
      "topic_title": "Angular Basics",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-intro",
          "topic_name": "Introduction to Angular"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-overview",
          "topic_name": "Angular Overview"
        },
        {
          "topic_id": "3",
          "topic_slug": "ng-cli-commands",
          "topic_name": "Angular CLI Commands"
        },
        {
          "topic_id": "4",
          "topic_slug": "ng-first-app",
          "topic_name": "First Angular App"
        },
        {
          "topic_id": "5",
          "topic_slug": "ng-string-interpolation",
          "topic_name": "String Interpolation"
        },
        {
          "topic_id": "6",
          "topic_slug": "ng-install-bootstrap",
          "topic_name": "Install Bootstrap in project"
        },
        {
          "topic_id": "7",
          "topic_slug": "ng-looping",
          "topic_name": "Angular Looping"
        },
        {
          "topic_id": "8",
          "topic_slug": "ng-property-event-binding",
          "topic_name": "Property and Event Binding"
        },
        {
          "topic_id": "9",
          "topic_slug": "ng-components-inputs",
          "topic_name": "Angular Components and Inputs"
        },
        {
          "topic_id": "10",
          "topic_slug": "ng-css-styling",
          "topic_name": "Styling Cards using CSS"
        },
        {
          "topic_id": "11",
          "topic_slug": "ng-outputs",
          "topic_name": "User Interaction and Outputs"
        }
      ]
    },
    {
      "topic_list_id": "2",
      "topic_title": "Angular Components",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-styles-encapsulation",
          "topic_name": "View Encapsulation"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-lifecycle-hooks",
          "topic_name": "Lifecycle Hooks"
        },
        {
          "topic_id": "3",
          "topic_slug": "ng-view-child-children",
          "topic_name": "ViewChild and ViewChildren"
        },
        {
          "topic_id": "4",
          "topic_slug": "ng-content-projection",
          "topic_name": "Content Projection"
        },
        {
          "topic_id": "5",
          "topic_slug": "ng-content-child-children",
          "topic_name": "ContentChild and ContentChildren"
        }
      ]
    },
    {
      "topic_list_id": "3",
      "topic_title": "Angular Routing",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-route-configuration",
          "topic_name": "Route Configuration"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-route-navigation",
          "topic_name": "Route Navigation"
        },
        {
          "topic_id": "3",
          "topic_slug": "ng-parameterised-routes",
          "topic_name": "Parameterised and Activated Routes"
        },
        {
          "topic_id": "4",
          "topic_slug": "ng-nested-routes",
          "topic_name": "Nested Routes"
        },
        {
          "topic_id": "5",
          "topic_slug": "ng-router-guards",
          "topic_name": "Router Guards"
        },
        {
          "topic_id": "6",
          "topic_slug": "ng-routing-strategies",
          "topic_name": "Routing Strategies"
        }
      ]
    },
    {
      "topic_list_id": "4",
      "topic_title": "Angular Directives",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-for-if-switch",
          "topic_name": "NgFor, NgIf and NgSwitch"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-ngstyle-ngclass",
          "topic_name": "NgStyle and NgClass"
        },
        {
          "topic_id": "3",
          "topic_slug": "ng-custom-directive",
          "topic_name": "Creating a Custom Directive"
        },
        {
          "topic_id": "4",
          "topic_slug": "ng-hostlistener-hostbinding",
          "topic_name": "HostListener and HostBinding"
        }
      ]
    },
    {
      "topic_list_id": "5",
      "topic_title": "Angular Pipes",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-built-in-pipes",
          "topic_name": "Built-In Pipes"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-async-pipes",
          "topic_name": "Async Pipe"
        },
        {
          "topic_id": "3",
          "topic_slug": "ng-custom-pipes",
          "topic_name": "Custom Pipes"
        }
      ]
    },
    {
      "topic_list_id": "6",
      "topic_title": "Angular Forms",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-model-driven-forms",
          "topic_name": "Model-Driven Forms"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-model-driven-form-validation",
          "topic_name": "Model-Driven Form Validation"
        },
        {
          "topic_id": "3",
          "topic_slug": "ng-reactive-model-form",
          "topic_name": "Reactive Model Form"
        },
        {
          "topic_id": "4",
          "topic_slug": "ng-template-driven-form",
          "topic_name": "Template-Driven Form"
        }
      ]
    },
    {
      "topic_list_id": "7",
      "topic_title": "Angular HTTP",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-core-http-api",
          "topic_name": "Core HTTP API"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-http-rxjs-maps",
          "topic_name": "HTTP with RxJs swithMap, mergeMap, concatMap"
        },
        {
          "topic_id": "3",
          "topic_slug": "ng-http-interceptors",
          "topic_name": "HTTP Interceptors"
        }
      ]
    },
    {
      "topic_list_id": "8",
      "topic_title": "Async programming",
      "topic_list": [
        {
          "topic_id": "1",
          "topic_slug": "ng-callbacks-promises",
          "topic_name": "Callbacks and Promises"
        },
        {
          "topic_id": "2",
          "topic_slug": "ng-observables-rxjs",
          "topic_name": "Observables and RxJS"
        }
      ]
    },
    {
      "topic_title": "Angular Programs",
      "topic_list": []
    },
    {
      "topic_title": "Interview Questions",
      "topic_list": []
    },
    {
      "topic_title": "Angular Skill Test",
      "topic_list": []
    }
  ]
}

var menu = [angularSeries];

menu.forEach(function (obj) {
  db.collection("article_topics")
    .add(angularSeries)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
