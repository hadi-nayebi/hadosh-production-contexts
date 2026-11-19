Motion fidelity is strong at the lifecycle level: particles stream into letterform targets, hold with bounded jitter while reserve dust continues flowing, then disperse before the next phrase forms. Existing particles retain identity across phrases, and the visible words are drawn from the particle pool rather than a separate text layer.

The main weaknesses are in the movement itself:

- Formation interpolates scattered particles toward targets assigned in sampling order. This produces broad convergence rather than clearly preserving directional streams as they condense.
- Dissolve staggering applies only to the added release velocity and alpha ramp. Every letter particle immediately resumes its full stream velocity when dissolve starts, including particles whose `releaseAt` has not arrived. The word therefore initially translates together, with an abrupt velocity change from HOLD.
- Wrapping the advected formation anchor can abruptly shift an interpolated particle by a substantial fraction of the frame width.
- At the next formation, `buildPhrase()` clears residual release velocity, interrupting momentum between phrases. Borrowed particles also immediately regain foreground alpha.
- The modest stream speed and narrow velocity variation suggest gentle drifting dust; the supplied technique calls for fast streams. Their perceptual match remains unverified.

The reported diagnostics support ongoing background flow, stable holds, and displacement before substantial fading. They do not establish rendered motion fidelity or eliminate the transition issues above.

BODY-WRITE: Require releaseAt to govern departure from the letterform, preserve momentum through phrase reassignment, and prevent formation-anchor wrapping from causing visible jumps; verify fast directional streaming in rendered playback.

SCORE: 76