# Tutorial transcript — U41fYDLFJzk (manual en subtitles, verbatim, timestamped)

[00:00:00] Today we're going to create a typographic animation
[00:00:02] entirely driven by physics-based collisions in After Effects,
[00:00:05] using the Newton plugin
[00:00:06] and a custom expression built with help from an AI assistant.
[00:00:09] I came up with a list of short words,
[00:00:11] 4 or 5 letters max, that express pain or impact.
[00:00:14] We mixed onomatopoeias like "Ouch" and "Yikes".
[00:00:17] Pain sounds like "Ugh", and soft swear words like "D*mn" or "Sh*t".
[00:00:21] The goal was to use short,
[00:00:22] expressive, punchy words that feel natural and readable in motion.
[00:00:25] The first word displayed will be: "Weeee".
[00:00:28] I start by creating a new composition.
[00:00:30] I create a text layer and type this first word.
[00:00:34] I center its anchor point,
[00:00:37] then draw a mask around the text.
[00:00:39] This mask keeps Newton from interpreting the full text geometry,
[00:00:42] simplifying the simulation.
[00:00:43] Since we can't animate fonts directly in Newton, keeping a defined space
[00:00:46] lets us switch out the words without altering the physical behavior.
[00:00:49] Using this simple setup, I can now test the process.
[00:00:52] Let's launch Newton.
[00:00:53] In Newton, I first add a ground.
[00:00:55] What I want is to capture all the collision data from my object
[00:00:58] whenever it hits a wall or another body.
[00:01:00] I want that interaction recorded.
[00:01:02] I select the object, go to Body Properties &gt; Advanced, and enable Export Contacts.
[00:01:10] I increase the solver substeps and lower the collision tolerance.
[00:01:13] Then I run a quick 100-frame test.
[00:01:17] In the new composition,
[00:01:18] I can see the simulation
[00:01:21] and more importantly, I now have an effect
[00:01:23] called Contact with a slider and keyframes that match the collisions.
[00:01:27] They're not always super precise,
[00:01:28] and sometimes the collision happens between two frames.
[00:01:31] Another useful detail:
[00:01:33] Newton also tracks the energy of the contact.
[00:01:37] Here's how the expression works.
[00:01:38] It contains the list of words we created.
[00:01:40] The first word shown is always "Weee".
[00:01:43] It reads the slider values from the Contact effect created by Export Contacts.
[00:01:47] It also includes two filters.
[00:01:49] The first filter ignores collisions that are too close together,
[00:01:51] less than three frames apart.
[00:01:53] The second ignores small changes under 30 units
[00:01:55] to focus only on meaningful impacts.
[00:01:57] I copy the expression and apply it to the text source.
[00:02:01] Let's see what it does.
[00:02:04] It works.
[00:02:05] Though I need to change the blending mode of the text layer
[00:02:07] to None to make it visible.
[00:02:09] Now we can see that the word changes at every valid collision.
[00:02:14] Let's scale things up.
[00:02:16] I delete the test comp.
[00:02:19] I reset the layer’s mode to "None" again and paste the expression.
[00:02:23] Then I duplicate the text layer 50 times.
[00:02:28] I offset each layer by three frames
[00:02:29] using the Sequence Layers command.
[00:02:36] Then I randomize the scale between 20% and 120%.
[00:02:40] I relaunch Newton.
[00:02:43] I place walls on the left and right.
[00:02:46] Then I use the Randomizer to distribute the layer positions
[00:02:49] between 100 and 900 pixels.
[00:02:57] I randomize the rotation between -10 and +10 degrees.
[00:03:01] Let's preview that.
[00:03:03] Not bad,
[00:03:05] but I add some gravity to make it more dynamic.
[00:03:10] Much better.
[00:03:11] Next I randomize more physical properties: density,
[00:03:16] friction,
[00:03:18] bounciness,
[00:03:21] and angular velocity.
[00:03:28] Now the animation looks much more lively.
[00:03:32] All that's left is to render the final comp.
[00:03:35] And here's the result.
[00:03:37] In the end, it was fast and simple to build,
[00:03:40] and the animation is expressive, physical, and interactive
[00:03:44] If you enjoyed this breakdown, feel free to subscribe or drop a comment.
[00:03:47] More Newton plus expressions experiments are coming soon.
[00:03:50] Thanks for watching and see you next time.
