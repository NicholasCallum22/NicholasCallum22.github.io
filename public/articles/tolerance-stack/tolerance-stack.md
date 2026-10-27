## The problem

A hydraulic-drivetrain mating interface with seven stacked parts has to keep a running clearance when it is hot. Tight tolerances everywhere would guarantee the fit but make machining expensive.

This is an independent project on my own geometry.

## What I did

I modelled the seven-part interface in Creo Parametric and ran a closed-loop 1D vector tolerance stack-up, both worst-case and 3σ RSS, to ASME Y14.5. Then I revised the datum reference frame and moved the non-critical shoulder interfaces from worst-case to statistical allocation.

| Method | Tolerance build-up |
| --- | --- |
| Worst-case | sum of the absolute tolerances |
| Statistical RSS | square root of the sum of squared tolerances |

## Results

| Result | Evidence |
| --- | --- |
| Axial binding risk of 0.38 mm found in the original allocation | Calculation |
| Minimum dynamic operating clearance of 0.15 mm at 85 °C after the revision | Calculation |
| Non-critical shoulder tolerances relaxed by 30%, assuming Cpk ≥ 1.33 | Calculation |

## Limits

The Cpk of 1.33 is an assumed process capability, not a measured one. The relaxed tolerances are meant to reduce projected CNC machining cost, but I have no cost figure, so I don't quote one.
