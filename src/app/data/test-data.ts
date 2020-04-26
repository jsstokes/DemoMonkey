export var TestData = [
  {
    title: "Flexible (#02)",
    description: "",
    overview: "",
    repo: "https://github.com/10gen/pov-proof-exercises/tree/master/proofs/02",
    setup: [
      {
        body: "Open a console to: pov-proof-exercises/proofs/02",
        buttons: [
          {
            label: "CD in Terminal",
            textToCopy: "cd ~/projects/pov-proof-exercises/proofs/02"
          }]
      },
      {
        body: "Create the model using the script in a terminal",
        buttons: [
          {
            label: "Copy to run in Terminal",
            textToCopy: "./create_model.py"
          }]
      },
      {
        body: "Open Compass",
        buttons: []
      },
      {
        body: "Go to the FLEXIBLE DB",
        buttons: []
      }

    ],
    execution: [
      {
        body: "Show Schema for your table",
        buttons: []
      },
      {
        body: "Now let's start a service using this collection",
        buttons: [
          {
            label: "Run in Terminal",
            textToCopy: "./microservice_one.py"
          }]
      },
      {
        body: "While that's running, let's add some fields to the data!! ",
        buttons: [
          {
            label: "Run in Terminal",
            textToCopy: "./alter_model.py"
          }]
      },
      {
        body: "Show the model changes in Compass",
        buttons: []
      },
      {
        body: "Start another application that uses the new model ",
        buttons: [
          {
            label: "Run in New Terminal",
            textToCopy: "./microservice_two.py"
          }
        ]
      }
    ]
  },
  {
    title: "RICH-QUERY Proof (#01)",
    description: "",
    overview: "",
    setup:[],
    execution: [
      {
        body: "Open Compass and run this query on the UNINDEXED Collection:",
        buttons: [
          {
            label: "Query to find",
            textToCopy: "{ 'gender': 'Female', 'dob': { '$gte': ISODate('1990-01-01'), '$lte' : ISODate('1990-12-12')}, 'address.state': 'UT', 'policies': { $elemMatch: {'policyType': 'life', 'insured_person.smoking': true }}}"
          }]
      },
      {
        body: "Show the explain tab",
        buttons: []
      },
      {
        body: "Switch over to the INDEXED COLLECTION - rather than creating the indexes on this one",
        buttons: []
      },
      {
        body: "Go to the explaing tabs and run the same query as before",
        buttons: [
          {
            label:"Find Criteria",
            textToCopy: "{ 'gender': 'Female', 'dob': { '$gte': ISODate('1990-01-01'), '$lte' : ISODate('1990-12-12')}, 'address.state': 'UT', 'policies': { $elemMatch: {'policyType': 'life', 'insured_person.smoking': true }}}"
          },
          {
            label:"Projection Criteria",
            textToCopy: "{ '_id': 0, 'firstname': 1, 'lastname': 1, 'dob': 1 }"
          }

        ]
      }


    ]
  }
];
            // {
  //   title: "",
  //   description: "",
  //   overview: "",
  //   setup: [
  //     {
  //       body: "",
  //       buttons: [
  //         {
  //           label: "",
  //           textToCopy: ""
  //         }]
  //     }
  //   ]
  // },
  // {
  //   title: "",
  //   description: "",
  //   overview: "",
  //   setup: [
  //     {
  //       body: "",
  //       buttons: [
  //         {
  //           label: "",
  //           textToCopy: ""
  //         }]
  //     }
  //   ]
  // },
  // {
  //   title: "",
  //   description: "",
  //   overview: "",
  //   setup: [
  //     {
  //       body: "",
  //       buttons: [
  //         {
  //           label: "",
  //           textToCopy: ""
  //         }]
  //     }
  //   ]
  // },
  // {
  //   title: "",
  //   description: "",
  //   overview: "",
  //   setup: [
  //     {
  //       body: "",
  //       buttons: [
  //         {
  //           label: "",
  //           textToCopy: ""
  //         }]
  //     }
  //   ]
  // },
  // {
  //   title: "",
  //   description: "",
  //   overview: "",
  //   setup: [
  //     {
  //       body: "",
  //       buttons: [
  //         {
  //           label: "",
  //           textToCopy: ""
  //         }]
  //     }
  //   ]
  // },
  // {
  //   title: "",
  //   description: "",
  //   overview: "",
  //   setup: [
  //     {
  //       body: "",
  //       buttons: [
  //         {
  //           label: "",
  //           textToCopy: ""
  //         }]
  //     }
  //   ]
  // },

// ]

//   {
//     checked: true,
//     title: "Demo 1",
//     description: "Description 1",
//     overview: "This is just a test for Demo 1 - it's true!!!",
//     setup: [
//       {
//         checked: true,
//         body: "Bring up Compass and show the TRUE database",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }
//     ],
//     execution: [
//       {
//         body: "Do this - do that",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }

//     ]
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2"
//   },
//   {
//     title: "Demo 3",
//     description: "Description of demo 3"
//   },
//   {
//     checked: true,
//     title: "Demo 1",
//     description: "Description 1",
//     overview: "This is just a test for Demo 1",
//     setup: [
//       {
//         body: "Bring up Compass and show the XXXX database",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }
//     ],
//     execution: [
//       {
//         body: "Do this - do that",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }

//     ]
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2"
//   },
//   {
//     title: "Demo 3",
//     description: "Description of demo 3"
//   },
//   {
//     title: "Demo 1",
//     description: "Description 1",
//     overview: "This is just a test abdout the demo",
//     setup: [
//       {
//         body: "Bring up Compass and show the XXXX database",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }
//     ],
//     execution: [
//       {
//         body: "Do this - do that",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }

//     ]
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2"
//   },
//   {
//     title: "Demo 3",
//     description: "Description of demo 3"
//   },
//   {
//     title: "Demo 1",
//     description: "Description 1",
//     overview: "This is just a test abdout the demo",
//     setup: [
//       {
//         body: "Bring up Compass and show the XXXX database",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }
//     ],
//     execution: [
//       {
//         body: "Do this - do that",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }

//     ]
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2"
//   },
//   {
//     title: "Demo 3",
//     description: "Description of demo 3"
//   },
//   {
//     title: "Demo 1",
//     description: "Description 1",
//     overview: "This is just a test abdout the demo",
//     setup: [
//       {
//         body: "Bring up Compass and show the XXXX database",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }
//     ],
//     execution: [
//       {
//         body: "Do this - do that",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }

//     ]
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2"
//   },
//   {
//     title: "Demo 3",
//     description: "Description of demo 3"
//   },
//   {
//     title: "Demo 1",
//     description: "Description 1",
//     overview: "This is just a test abdout the demo",
//     setup: [
//       {
//         body: "Bring up Compass and show the XXXX database",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }
//     ],
//     execution: [
//       {
//         body: "Do this - do that",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }

//     ]
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2"
//   },
//   {
//     title: "Demo 3",
//     description: "Description of demo 3"
//   },
//   {
//     title: "Demo 1",
//     description: "Description 1",
//     overview: "This is just a test abdout the demo",
//     setup: [
//       {
//         body: "Bring up Compass and show the XXXX database",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }
//     ],
//     execution: [
//       {
//         checked: true,
//         body: "Do this - do that",
//         buttons: [
//           {
//             label: "Button Label1 ",
//             textToCopy: "This is on the clipboard"
//           },
//           {
//             label: "Button Label 2",
//             textToCopy: "This is from button 2"
//           }
//         ]
//       },
//       {
//         body: "Done - go to Execution Stage",
//         buttons: [
//         ]
//       }

//     ]
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2"
//   },
//   {
//     title: "Demo 3",
//     description: "Description of demo 3"
//   }
// ];
