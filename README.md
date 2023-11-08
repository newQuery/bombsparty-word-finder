# Bombs Party international words finder

Current json in `dic` are for the French language

## Requirements

- NodeJS
- a Terminal

## Installation

- Clone the repository
- Download the language JSONs dictionnaries and place it into `dic` folder.
- Open the terminal and run `$ node distinctValues`. This will generate a file with distinct words based on the provided jsons
- Enjoy and run `$ node main [ARGUMENT]` ex: `$ node main GTE` result : `doigter`

## What JSON to put in `dic`

You can put as many json files as you want. The structure needs to be like below: 

`[key: string]: string` example : 

```json
{
    "SE/E/F*E": "c'est éwé",
    "SE/E/F*E": "c'est éwé",
    "SE/O/TE": "c'est ôté",
    "SE/O/TE": "c'est ôté"
}
```

When switching language, make sure to remove the previous language json and use `$ node distinctValues`to regenerate the dictionary 