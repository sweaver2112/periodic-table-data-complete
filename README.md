# periodic-table-data-complete

-- powering http://ChemStudent.net --

The definitive dataset for chemical elements.

Collator: Scott Weaver @sweaver2112

### acknowledgements

https://github.com/Bowserinator/Periodic-Table-JSON,

http://en.wikipedia.com,

http://pTable.com,

http://periodictable.com

https://www.convertonline.io/convert/js-to-json

## Notes

1. The data is not flat - compound values are objects (Hardness, Abundance, Heat Of, Melting Point, Boiling Point, and many more)
2. Summary includes entire Wikipedia first section, consequently it retains the paragraph tags from the source: &lt;p&gt;summary text...&lt;/p&gt;&lt;p&gt;next paragraph...&lt;/p&gt;
3. Isomorphic units map is included (it has the same structure and names as the pTable)
4. Property definitions (such as: melting_point) are included as HTML with link to Wikipedia article

## Installation

`npm install periodic-table-data-complete`
*raw JSON and CSV files are also included

## Usage

`import { pTable, pTableUnits, pTableProperties } from periodic-table-data-complete`

The PTable is an array of objects, each object representing one chemical element. 

Thus, to find, for example, the universal abundance of Helium (noting that Helium is the 2nd element by atomic number) :

```javascript
var pt = JSON.parse(pTable)
pt[1].abundance.universe => 23
```
more likely, you'll want to fetch an element by symbol:

```javascript
pt.find(el=>el.symbol=="B")  => Boron object
```

### Units

```javascript
var units = JSON.parse(pTableUnits)
units.abundance.universe => "%"
```

### Property Defintions

```javascript
var chemical_properties = JSON.parse(pTableProperties)
chemical_properties.atomic_number => 'The <a target="_blank" href="https://en.wikipedia.org/wiki/Atomic_number">atomic number</a> or proton number (symbol <em>Z</em>) of a chemical element is the number of protons found in the nucleus of every atom of that element. The atomic number uniquely identifies a chemical element. It is identical to the charge number of the nucleus. In an uncharged atom, the atomic number is also equal to the number of electrons.'
```

## Hierarchy / Available Properties

abundance.crust
abundance.human
abundance.meteor
abundance.ocean
abundance.solar
abundance.universe
adiabatic_index
allotropes
alternate_names
appearance
atomic_mass
atomic_number
block
boiling_point
classifications.cas_number
classifications.cid_number
classifications.dot_hazard_class
classifications.dot_numbers
classifications.rtecs_number
conductivity.electric
conductivity.thermal
cpk_hex
critical_pressure
critical_temperature
crystal_structure
curie_point
decay_mode
density.liquid
density.stp
discovered.by
discovered.location
discovered.year
electrical_type
electron_affinity
electron_configuration
electron_configuration_semantic
electronegativity_pauling
electrons_per_shell.0
electrons_per_shell.1
electrons_per_shell.2
electrons_per_shell.3
electrons_per_shell.4
electrons_per_shell.5
electrons_per_shell.6
electrons_per_shell.7
energy_levels
gas_phase
group
half-life
hardness.brinell
hardness.mohs
hardness.vickers
heat.fusion
heat.molar
heat.specific
heat.vaporization
ionization_energies.0
ionization_energies.1
ionization_energies.2
ionization_energies.3
ionization_energies.4
ionization_energies.5
ionization_energies.6
ionization_energies.7
ionization_energies.8
ionization_energies.9
ionization_energies.10
ionization_energies.11
ionization_energies.12
ionization_energies.13
ionization_energies.14
ionization_energies.15
ionization_energies.16
ionization_energies.17
ionization_energies.18
ionization_energies.19
ionization_energies.20
ionization_energies.21
ionization_energies.22
ionization_energies.23
ionization_energies.24
ionization_energies.25
ionization_energies.26
ionization_energies.27
ionization_energies.28
ionization_energies.29
isotopes_known
isotopes_stable
isotopic_abundances
lattice_angles
lattice_constants
lifetime
magnetic_susceptibility.mass
magnetic_susceptibility.molar
magnetic_susceptibility.volume
magnetic_type
melting_point
modulus.bulk
modulus.shear
modulus.young
molar_volume
name
neel_point
neutron_cross_section
neutron_mass_absorption
oxidation_states
period
phase
poisson_ratio
quantum_numbers
radius.calculated
radius.covalent
radius.empirical
radius.vanderwaals
refractive_index
resistivity
series
source
space_group_name
space_group_number
speed_of_sound
summary
superconducting_point
symbol
thermal_expansion
valence_electrons


