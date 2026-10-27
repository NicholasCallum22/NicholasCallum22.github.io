## The problem

Before using a reacting-flow solver for anything applied, it has to reproduce a known answer. For detonation, the reference is the Chapman-Jouguet (CJ) state.

This is an independent project.

## What I did

I ran a transient OpenFOAM compressible reacting-flow solver on stoichiometric hydrogen-air detonation in a planar shock tube, in 1D and 2D.

| Setting | Value |
| --- | --- |
| Domain | 1.5 m × 0.03 m planar tube |
| Mixture | Stoichiometric H₂-air at 1 atm and 298 K |
| Chemistry | Ó Conaire et al. 9-species, 19-reaction mechanism, stiff ODE solver |
| Resolution | 0.1 mm cells across the induction zone, about 15 to 20 cells per half-reaction length |
| Time step | Courant number ≤ 0.2 |
| Reference | NASA CEA and the Caltech detonation database (Kaneshige and Shepherd, 1997) |

## Results

| Quantity | Simulated | Reference | Deviation |
| --- | --- | --- | --- |
| CJ detonation velocity | 1912 m/s | 1968 m/s | 2.85% |
| CJ pressure | 1.51 MPa | 1.58 MPa | 4.43% |

Both are within 4.5%. CJ pressure is the weaker match.

## Limits

This validates 1D and 2D planar detonation only. A 3D annular rotating detonation engine combustor is a direction I would like to pursue, not work I have started.
