# S1 — Recovery validation + effective-table re-validation · T02 attempt 3

Construction: two named validators (candidate-strict: strictly increasing
times AND counts, first (0,0), terminal == line count · derived: strictly
increasing times, NON-decreasing counts, terminal count reserved for the
final anchor) with shape checked BEFORE any dereference in both
validators and in the recovery entry (shapeValidCheckpoints: array,
non-null object entries, timeMs/count present). Recovery derives from a
trusted fallback basis (the default anchor table captured before any
override runs) when the candidate is not a coherent basis; candidate
times are never carried into a recovered table. The effective table is
re-validated after recovery (candidate rule for candidates, derived rule
for derivations — validator named per case in the suite output).

Own-check output (harness group S1, run on the S1 source): **30 PASS,
0 FAIL** — includes R-1 (null entry → shape rejection, no throw,
effective == validated default, counts 0/20/39 at 0/3000/7000 ms) and
nine malformed-table cases (empty, null, reordered, negative,
non-finite, duplicate times; non-object and missing-field entries;
infinite count), each asserting a validated effective table, a named
warning, and monotonic countAtMs over the recovered table.

Post-overwrite preservation census (plan §3.4, executed HERE inside S1,
immediately after the first working-source write): sha256sum -c against
baseline-attempt-3.sha256 — every pre-existing file OK except
./recreation.html (the working file, changed by this stage, expected);
recreation-attempt-2.html preserved at 11b02a33…354757.

Checkpoint: S1-source.html sha256 e23f39fc3c749db8885e69fce15da31e3784380c13fd76c49b83d47892ffbef6,
inode ≠ working file. Effect record: recovery class — PASS per assertion above.
