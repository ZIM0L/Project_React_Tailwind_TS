export const sidebar: string[] = ['your info', 'select plan', 'add-ons', 'summary', ] 

type plansType = {
    [key: string]: [string, string, string]; 
  };
type addOnsType = {
    [key: string]: [string, string, string]; 
  };
export const plans: plansType = {
    "Arcade":[
        "images/icon-arcade.svg",
        "$9/mo",
        "$90/yr"
        ],
    "Advanced":[
        "images/icon-advanced.svg",
        "$12/mo",
        "$120/yr"
        ],
    "Pro":[
        "images/icon-pro.svg",
        "$15/mo",
        "$150/yr"
    ]
}
export const addOns: addOnsType = { 
    "Online service":[
        "Access to multiplayer games",
        "+$1/mo",
        "+$10/yr",
    ],
    "Larger storage":[
        "Extra 1TB of cloud save",
        "+$2/mo",
        "+$20/yr"
    ],
    "Customizable profile":[
        "Custom theme on you profile",
        "+$2/mo",
        "+$20/yr",
    ],
}