## The problem

Topology optimisation produces an organic mesh that no machine shop can make. I wanted to take a heavy-equipment steel mounting bracket through the whole loop: optimise it, then rebuild it as clean, machinable CAD that still meets the loads.

This is an independent project on my own geometry and catalogue parts. It uses no employer drawings, files or load data, and it is separate from the bracket I worked on at JCB.

## What I did

I ran a stress-constrained topology optimisation in ANSYS Mechanical under simulated peak three-axis hydraulic shock loads. I then rebuilt the optimised facet mesh in Fusion 360 as parametric B-Rep CAD with R6 mm machinable fillets, and checked the first natural frequency.

The optimiser minimises compliance, C = Fᵀu, subject to a volume limit and the stiffness equation Ku = F, with von Mises stress held below yield divided by the factor of safety.

## Results

| Result | Evidence |
| --- | --- |
| Mass down 29% (1.45 kg per unit) | Simulation |
| Factor of safety 2.15 at a peak stress of 162 MPa | Simulation |
| First natural frequency up 16%, to 142 Hz | Simulation |

## Limits

All figures are simulated. The steel grade assigned in the model is still to be confirmed, so I don't name one here.
