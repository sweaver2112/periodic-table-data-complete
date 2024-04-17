/* Author:Scott Weaver https://github.com/sweaver2112/periodic-table-data-complete */
const pTableUnits = JSON.stringify(

{
    "abundance": {
        "universe": "%",
        "solar": "%",
        "meteor": "%",
        "crust": "%",
        "human": "%"
    },
    "atomic_mass": "amu",
    "boiling_point": {
        "celsius": "°",
        "fahrenheit": "°",
        "kelvin": "K"
    },
    "conductivity": {
        "thermal": "W/mK",
        "electric": "MS/m"
    },
    "curie_point": "K",
    "density": {
        "shear": "GPa",
        "young": "GPa",
        "stp": "kg/m³",
        "liquid": "kg/m³"
    },
    "discovered": "year",
    "electron_affinity": "kJ/mol",
    "electronegativity_pauling": "kJ/mol",
    "energy_levels": "e⁻️",
    "half_life": "year",
    "hardness": {
        "radius": "pm",
        "vickers": "MPa",
        "brinell": "MPa",
        "mohs": "MPa"
    },
    "heat": {
        "specific": "J/(kg K)",
        "fusion": "kJ/mol",
        "vaporization": "kJ/mol",
        "molar": "J/K.mol"
    },
    "ionization_energies": "kJ/mol",
    "lattice_constants": "pm",
    "lifetime": "year",
    "magnetic_susceptibility": {
        "mass": "m³/Kg",
        "molar": "m³/mol"
    },
    "melting_point": {
        "celsius": "°",
        "fahrenheit": "°",
        "kelvin": "K"
    },
    "modulus": {
        "bulk": "GPa"
    },
    "neel_point": "K",
    "radius": {
        "calculated": "pm",
        "empirical": "pm",
        "covalent": "pm",
        "vanderwaals": "pm"
    },
    "resistivity": "m Ω",
    "speed_of_sound": "m/s",
    "superconducting_point": "K",
    "thermal_expansion": "K⁻¹"
});

export { pTableUnits }