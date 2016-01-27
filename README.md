# student-activity-details-reports-app

Basic structure added. Configured Test Environment.

Structure Details:

    root # root directory
        build
        src
            index.html # Entry file
            js
                app
                    Main AngularJs module and configuration file
                routes
                    route files
                controllers
                    controller files
                directives
                    directive files
                services
                    service files
                constants
                data
                    local data storage (should be used for development purpose only)
                factories
                partials
                    partial templates
            css
                lib
                    CSS library dependencies
                Custom CSS files
            fonts
                Embedded fonts
            lib
                JS library dependencies
            img
                Image files

        test # All test cases and specs goes here

# Configuration Details

1. Make sure Node.js is installed. If not install Node.js
2. Make sure bower is installed.
3. Open terminal in the root directory and run the following commands:
    * npm install
    * bower install
    * npm i -g karma-cli
4. For unit testing run in terminal:
    karma start
