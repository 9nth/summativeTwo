Summative Two

The Project:
A South Island trip planner based around finding accomodation close to places with lots of natural beauty. (Hikes, Lakes, Glaciers, Mountains etc).

JS Style Guide:
Idiomatic Style Guide ~ Things taken from Style Guide:

Spacing ~ Empty space between sections encourages readability. Specifically, breaks between every CSS Class, function, if statement, button etc.
Commenting ~ Not just labelling things but in some cases explaining what's happening to add further context for other people who may read the code.
Variables ~ Where possible, keeping Variables in the same place. Grouped with Vars that are relative.
            Variables are also placed as close as possible to relative functions to create structure.
Consistency ~ For the If statements (possibly the centre piece of the JS code), the layout for each is identical to the last with changes to specific things like class names and data objects.
Exceptions or Slight Deviations ~ In the JS file, Vars are sometimes defined twice due to scope issues.

Production Tools & Workflow:
  Pen & Paper for initial notes & lo fi's.
  Illustrator:
    For the process of developing user flows, having the freedom to create lots of panels and draw arrows between them was really helpful. I found it a lot more useful than tools like Adobe XD.
    Creating medium fi's and hi fi's, placing images, trying different fonts & changing colours was much easier in illustrator.
    Creating visual assets for the website such as images & vectors.
    Lightroom for tweaking images for site.
    Atom to code project.
    Gulp to get a better idea of errors & to have live reload to save time during production.
    Google Chrome console/dev tools for finding errors as well as making small changes on the fly to see how/if they would work.

Js Libraries:
  jQuery UI - For the use of the tab system that makes the whole booking system function.
  Date Range Picker - For the use of choosing accomodation dates & using those dates get a total price depending on number of nights.
  Parsley - For the purpose of validation user inputs and giving them meaningful feedback.

Third Party Plugins
  Atom Live Server ~ For before Gulp was setup, reloads page when file is saved.
  Open in Browser ~ Again pre Gulp, this plug in has a little button in the bottom toolbar to open the HTMl file in a browser, has buttons for 3 browsers. Saved me time each time i opened to project.
  Colour Picker ~ For quick testing of colours mid coding session. My development changed from my Hi Fi's to the final product so this was a really helpful tool.

  Validator:

  Error justification:
    Line 1: Needs <!DOCTYPE html>, however when added, it breaks the layout of the page.

    Lines 125, 160, 240, 258: Error because of empty src tag on image, the image will be pulled in from data object depending on users selection so it needs to remain empty before selection is made.

    Line 238: Heading is empty because the data will be pulled from data var when selections are made.
