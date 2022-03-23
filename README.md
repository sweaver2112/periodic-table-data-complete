# periodic-table-data

-- powering http://ChemStudent.net --

The definitive data-set for chemical elements.

Collator: Scott Weaver @sweaver2112

## acknowledgements

https://github.com/Bowserinator/Periodic-Table-JSON,

http://en.wikipedia.com,

http://pTable.com,

http://periodictable.com


## Notes

1. The data is not flat - compound values are objects (Hardness, Abundance, Heat Of, Melting Point, Boiling Point, and many more)
2. Summary includes entire Wikipedia first section, consequently it retains the paragraph tags from the source: &lt;p&gt;summary text...&lt;/p&gt;&lt;p&gt;next paragraph...&lt;/p&gt;
3. Isomorphic units map is included (it has the same structure and names as the pTable)

## Usage

The PTable is an array of objects, each object representing one chemical element. 

Thus, to find, for example, the universal abundance of Helium (noting that Helium is the 2nd element by atomic number) :

```pTable[1].abundance.universe => 23```

more likely, you'll want to fetch an element by symbol:

```pTable.find(el=>el.symbol=="B")  => Boron object```

You can get the units by accessing the map with the corresponding property name:

```pTableUnits.abundance.universe => "%"``` 

## Hierarchy / Available Properties

abundance.crust</br>abundance.human</br>abundance.meteor</br>abundance.ocean</br>abundance.solar</br>abundance.universe</br>adiabatic_index</br>allotropes</br>alternate_names</br>appearance</br>atomic_mass</br>atomic_number</br>block</br>boiling_point</br>classifications.cas_number</br>classifications.cid_number</br>classifications.dot_hazard_class</br>classifications.dot_numbers</br>classifications.rtecs_number</br>conductivity.electric</br>conductivity.thermal</br>cpk_hex</br>critical_pressure</br>critical_temperature</br>crystal_structure</br>curie_point</br>decay_mode</br>density.liquid</br>density.stp</br>discovered.by</br>discovered.location</br>discovered.year</br>electrical_type</br>electron_affinity</br>electron_configuration</br>electron_configuration_semantic</br>electronegativity_pauling</br>electrons_per_shell.0</br>electrons_per_shell.1</br>electrons_per_shell.2</br>electrons_per_shell.3</br>electrons_per_shell.4</br>electrons_per_shell.5</br>electrons_per_shell.6</br>electrons_per_shell.7</br>energy_levels</br>gas_phase</br>group</br>half-life</br>hardness.brinell</br>hardness.mohs</br>hardness.vickers</br>heat.fusion</br>heat.molar</br>heat.specific</br>heat.vaporization</br>ionization_energies.0</br>ionization_energies.1</br>ionization_energies.2</br>ionization_energies.3</br>ionization_energies.4</br>ionization_energies.5</br>ionization_energies.6</br>ionization_energies.7</br>ionization_energies.8</br>ionization_energies.9</br>ionization_energies.10</br>ionization_energies.11</br>ionization_energies.12</br>ionization_energies.13</br>ionization_energies.14</br>ionization_energies.15</br>ionization_energies.16</br>ionization_energies.17</br>ionization_energies.18</br>ionization_energies.19</br>ionization_energies.20</br>ionization_energies.21</br>ionization_energies.22</br>ionization_energies.23</br>ionization_energies.24</br>ionization_energies.25</br>ionization_energies.26</br>ionization_energies.27</br>ionization_energies.28</br>ionization_energies.29</br>isotopes_known</br>isotopes_stable</br>isotopic_abundances</br>lattice_angles</br>lattice_constants</br>lifetime</br>magnetic_susceptibility.mass</br>magnetic_susceptibility.molar</br>magnetic_susceptibility.volume</br>magnetic_type</br>melting_point</br>modulus.bulk</br>modulus.shear</br>modulus.young</br>molar_volume</br>name</br>neel_point</br>neutron_cross_section</br>neutron_mass_absorption</br>oxidation_states</br>period</br>phase</br>poisson_ratio</br>quantum_numbers</br>radius.calculated</br>radius.covalent</br>radius.empirical</br>radius.vanderwaals</br>refractive_index</br>resistivity</br>series</br>source</br>space_group_name</br>space_group_number</br>speed_of_sound</br>summary</br>superconducting_point</br>symbol</br>thermal_expansion</br>valence_electrons


