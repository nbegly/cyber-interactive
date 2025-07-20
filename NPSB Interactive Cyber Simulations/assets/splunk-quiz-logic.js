const questions = [
    {
    q: "Which search string only returns events from hostWWW3?",
    type: "single",
    answers: [
      { text: "A. host=*", correct: false, explain: "Incorrect. 'host=*' matches any host, not just WWW3." },
      { text: "B. host=WWW3", correct: true, explain: "Correct! 'host=WWW3' returns only events from hostWWW3." },
      { text: "C. host=WWW*", correct: false, explain: "Incorrect. This matches any host starting with 'WWW'." },
      { text: "D. Host=WWW3", correct: false, explain: "Incorrect. Splunk search is case-sensitive: use lowercase 'host'." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "By default, how long does Splunk retain a search job?",
    type: "single",
    answers: [
      { text: "A. 10 Minutes", correct: true, explain: "Correct. The default job retention is 10 minutes." },
      { text: "B. 15 Minutes", correct: false, explain: "Incorrect. 15 minutes is not the default." },
      { text: "C. 1 Day", correct: false, explain: "Incorrect. The default is shorter." },
      { text: "D. 7 Days", correct: false, explain: "Incorrect. The default is shorter." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What must be done before an automatic lookup can be created? (Choose all that apply.)",
    type: "multi",
    answers: [
      { text: "A. The lookup command must be used.", correct: false, explain: "Incorrect. Using the command is not a requirement for creation." },
      { text: "B. The lookup definition must be created.", correct: true, explain: "Correct. A lookup definition is needed before creating an automatic lookup." },
      { text: "C. The lookup file must be uploaded to Splunk.", correct: true, explain: "Correct. The file must be present in Splunk for lookup creation." },
      { text: "D. The lookup file must be verified using the inputlookup command.", correct: false, explain: "Incorrect. Verification with inputlookup is not required for creation." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following Splunk components typically resides on the machines where data originates?",
    type: "single",
    answers: [
      { text: "A. Indexer", correct: false, explain: "Incorrect. Indexers store and index data but usually run on central servers." },
      { text: "B. Forwarder", correct: true, explain: "Correct! Forwarders collect and send data from the source machine." },
      { text: "C. Search head", correct: false, explain: "Incorrect. Search heads run on servers and coordinate searches." },
      { text: "D. Deployment server", correct: false, explain: "Incorrect. Deployment servers are for configuration management, not data origination." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What determines the scope of data that appears in a scheduled report?",
    type: "single",
    answers: [
      { text: "A. All data accessible to the User role will appear in the report.", correct: false, explain: "Incorrect. Scope can be owner or user." },
      { text: "B. All data accessible to the owner of the report will appear in the report.", correct: false, explain: "Incorrect. It can depend on configuration." },
      { text: "C. All data accessible to all users will appear in the report until the next time the report is run.", correct: false, explain: "Incorrect." },
      { text: "D. The owner of the report can configure permissions so that the report uses either the User role or the owner's profile at run time.", correct: true, explain: "Correct! The owner can set how the report runs, impacting data scope." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "When writing searches in Splunk, which of the following is true about Booleans?",
    type: "single",
    answers: [
      { text: "A. They must be lowercase.", correct: false, explain: "Incorrect. Splunk Booleans are not lowercase." },
      { text: "B. They must be uppercase.", correct: true, explain: "Correct! Booleans like AND/OR/NOT must be uppercase." },
      { text: "C. They must be in quotations.", correct: false, explain: "Incorrect. Booleans do not require quotes." },
      { text: "D. They must be in parentheses.", correct: false, explain: "Incorrect. Parentheses are not required for Booleans, but can be used for grouping." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following searches would return events with failure in index netfw or warn or critical in index netops?",
    type: "single",
    answers: [
      { text: "A. (index=netfw failure) AND index=netops warn OR critical", correct: false, explain: "Incorrect." },
      { text: "B. (index=netfw failure) OR (index=netops (warn OR critical))", correct: true, explain: "Correct! This search achieves the required logic." },
      { text: "C. (index=netfw failure) AND (index=netops (warn OR critical))", correct: false, explain: "Incorrect." },
      { text: "D. (index=netfw failure) OR index=netops OR (warn OR critical)", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Select the answer that displays the accurate placing of the pipe in the following search string: index=security sourcetype=access_* status=200 stats count by price",
    type: "single",
    answers: [
      { text: "A. index=security sourcetype=access_* status=200 stats | count by price", correct: false, explain: "Incorrect." },
      { text: "B. index=security sourcetype=access_* status=200 | stats count by price", correct: true, explain: "Correct! Pipe should be before stats." },
      { text: "C. index=security sourcetype=access_* status=200 | stats count | by price", correct: false, explain: "Incorrect." },
      { text: "D. index=security sourcetype=access_* | status=200 | stats count by price", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following constraints can be used with the top command?",
    type: "single",
    answers: [
      { text: "A. limit", correct: true, explain: "Correct! The top command supports the limit argument." },
      { text: "B. useperc", correct: false, explain: "Incorrect." },
      { text: "C. addtotals", correct: false, explain: "Incorrect." },
      { text: "D. fieldcount", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "When editing a dashboard, which of the following are possible options? (Choose all that apply.)",
    type: "multi",
    answers: [
      { text: "A. Add an output.", correct: false, explain: "Incorrect." },
      { text: "B. Export a dashboard panel.", correct: false, explain: "Incorrect." },
      { text: "C. Modify the chart type displayed in a dashboard panel.", correct: true, explain: "Correct! You can modify chart types." },
      { text: "D. Drag a dashboard panel to a different location on the dashboard.", correct: true, explain: "Correct! You can drag panels." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "When running searches, command modifiers in the search string are displayed in what color?",
    type: "single",
    answers: [
      { text: "A. Red", correct: false, explain: "Incorrect." },
      { text: "B. Blue", correct: false, explain: "Incorrect." },
      { text: "C. Orange", correct: true, explain: "Correct! Modifiers appear orange in the search bar." },
      { text: "D. Highlighted", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following represents the Splunk recommended naming convention for dashboards?",
    type: "single",
    answers: [
      { text: "A. Description_Group_Object", correct: false, explain: "Incorrect." },
      { text: "B. Group_Description_Object", correct: false, explain: "Incorrect." },
      { text: "C. Group_Object_Description", correct: true, explain: "Correct! Group_Object_Description is the preferred format." },
      { text: "D. Object_Group_Description", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How can search results be kept longer than 7 days?",
    type: "single",
    answers: [
      { text: "A. By scheduling a report.", correct: false, explain: "Incorrect." },
      { text: "B. By creating a link to the job.", correct: false, explain: "Incorrect." },
      { text: "C. By changing the job settings.", correct: true, explain: "Correct! Changing the job settings can extend retention." },
      { text: "D. By changing the time range picker to more than 7 days.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is a Splunk search best practice?",
    type: "single",
    answers: [
      { text: "A. Filter as early as possible.", correct: true, explain: "Correct! Early filtering increases performance." },
      { text: "B. Never specify more than one index.", correct: false, explain: "Incorrect." },
      { text: "C. Include as few search terms as possible.", correct: false, explain: "Incorrect." },
      { text: "D. Use wildcards to return more search results.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "When looking at a dashboard panel that is based on a report, which of the following is true?",
    type: "single",
    answers: [
      { text: "A. You can modify the search string in the panel, and you can change and configure the visualization.", correct: false, explain: "Incorrect." },
      { text: "B. You can modify the search string in the panel, but you cannot change and configure the visualization.", correct: false, explain: "Incorrect." },
      { text: "C. You cannot modify the search string in the panel, but you can change and configure the visualization.", correct: true, explain: "Correct! Only visualization settings can be changed, not the search string." },
      { text: "D. You cannot modify the search string in the panel, and you cannot change and configure the visualization.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following are common constraints of the top command?",
    type: "multi",
    answers: [
      { text: "A. limit", correct: true, explain: "Correct! 'limit' is a supported constraint." },
      { text: "B. count", correct: true, explain: "Correct! 'count' is a supported constraint." },
      { text: "C. limits", correct: false, explain: "Incorrect." },
      { text: "D. showperc", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "When displaying results of a search, which of the following is true about line charts?",
    type: "single",
    answers: [
      { text: "A. Line charts are optimal for single and multiple series.", correct: false, explain: "Incorrect." },
      { text: "B. Line charts are optimal for single series when using Fast mode.", correct: false, explain: "Incorrect." },
      { text: "C. Line charts are optimal for multiple series with 3 or more columns.", correct: true, explain: "Correct! Line charts are best for multiple series with several columns." },
      { text: "D. Line charts are optimal for multiseries searches with at least 2 or more columns.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How are events displayed after a search is executed?",
    type: "single",
    answers: [
      { text: "A. In chronological order.", correct: false, explain: "Incorrect." },
      { text: "B. Randomly by default.", correct: false, explain: "Incorrect." },
      { text: "C. In reverse chronological order.", correct: true, explain: "Correct! Events are shown newest to oldest." },
      { text: "D. Alphabetically according to field name.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is true about user account settings and preferences?",
    type: "single",
    answers: [
      { text: "A. Search & Reporting is the only app that can be set as the default application.", correct: false, explain: "Incorrect." },
      { text: "B. Full names can only be changed by accounts with a Power User or Admin role.", correct: false, explain: "Incorrect." },
      { text: "C. Time zones are automatically updated based on the setting of the computer accessing Splunk.", correct: false, explain: "Incorrect." },
      { text: "D. Full name, time zone, and default app can be defined by clicking the login name in the Splunk bar.", correct: true, explain: "Correct! These settings are user-customizable in the Splunk bar." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is a primary function of a scheduled report?",
    type: "single",
    answers: [
      { text: "A. Auto-detect changes in performance.", correct: false, explain: "Incorrect." },
      { text: "B. Auto-generated PDF reports of overall data trends.", correct: false, explain: "Incorrect." },
      { text: "C. Regularly scheduled archiving to keep disk space use low.", correct: false, explain: "Incorrect." },
      { text: "D. Triggering an alert in your Splunk instance when certain conditions are met.", correct: true, explain: "Correct! Scheduled reports can trigger alerts when criteria are met." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which search mode returns the fastest search results but disables field discovery?",
    type: "single",
    answers: [
      { text: "A. Smart", correct: false, explain: "Incorrect. Smart mode is a balance, not the fastest." },
      { text: "B. Verbose", correct: false, explain: "Incorrect. Verbose is the most comprehensive, not the fastest." },
      { text: "C. Fast", correct: true, explain: "Correct! Fast mode disables field discovery for speed." },
      { text: "D. Extended", correct: false, explain: "Incorrect. There is no Extended search mode." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field is displayed by default in Splunk search results?",
    type: "single",
    answers: [
      { text: "A. _index", correct: false, explain: "Incorrect. _index is not displayed by default." },
      { text: "B. _raw", correct: true, explain: "Correct! _raw (the event data) is always displayed." },
      { text: "C. host", correct: false, explain: "Incorrect. Host is not always shown by default." },
      { text: "D. eventtype", correct: false, explain: "Incorrect. Eventtype is not default." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which type of search in Splunk is used to filter event data before it is displayed?",
    type: "single",
    answers: [
      { text: "A. Transforming search", correct: false, explain: "Incorrect. Transforming search summarizes data." },
      { text: "B. Event search", correct: true, explain: "Correct! Event searches filter before displaying results." },
      { text: "C. Generating search", correct: false, explain: "Incorrect. Generating search creates data." },
      { text: "D. Reporting search", correct: false, explain: "Incorrect. Reporting is for summaries and charts." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following can be used to automatically discover interesting fields in Splunk?",
    type: "single",
    answers: [
      { text: "A. Field extractor", correct: false, explain: "Incorrect. Field extractor is a manual tool." },
      { text: "B. Fast mode", correct: false, explain: "Incorrect. Fast disables field discovery." },
      { text: "C. Verbose mode", correct: true, explain: "Correct! Verbose mode enables automatic discovery." },
      { text: "D. Lookup table", correct: false, explain: "Incorrect. Lookups are for enrichment, not field discovery." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the stats command do in a Splunk search?",
    type: "single",
    answers: [
      { text: "A. Filters events based on criteria.", correct: false, explain: "Incorrect. Filtering is not stats." },
      { text: "B. Summarizes data into tables and charts.", correct: true, explain: "Correct! stats produces summarized results." },
      { text: "C. Adds a timestamp to each event.", correct: false, explain: "Incorrect. Timestamps are already present." },
      { text: "D. Exports data to CSV.", correct: false, explain: "Incorrect. Export is not the function of stats." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "In Splunk, what does a lookup table allow you to do?",
    type: "single",
    answers: [
      { text: "A. Add extra fields to events based on matching data.", correct: true, explain: "Correct! Lookups enrich events with additional fields." },
      { text: "B. Filter out unwanted events.", correct: false, explain: "Incorrect. Filtering is not lookup's purpose." },
      { text: "C. Change field names in search results.", correct: false, explain: "Incorrect. Lookups do not rename fields." },
      { text: "D. Schedule automatic reports.", correct: false, explain: "Incorrect. Scheduling is not lookup's function." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which search command in Splunk is used to group results by a specific field?",
    type: "single",
    answers: [
      { text: "A. dedup", correct: false, explain: "Incorrect. dedup removes duplicates, not group by." },
      { text: "B. sort", correct: false, explain: "Incorrect. sort orders, not group by." },
      { text: "C. stats by", correct: true, explain: "Correct! stats ... by <field> groups results." },
      { text: "D. eval", correct: false, explain: "Incorrect. eval calculates fields, not group by." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the purpose of the dedup command in Splunk?",
    type: "single",
    answers: [
      { text: "A. To combine multiple fields.", correct: false, explain: "Incorrect. dedup is not for combining fields." },
      { text: "B. To remove duplicate events based on a field.", correct: true, explain: "Correct! dedup removes duplicates." },
      { text: "C. To group events for summary.", correct: false, explain: "Incorrect. That is not dedup's job." },
      { text: "D. To create charts.", correct: false, explain: "Incorrect. Charts are for visualization, not dedup." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the default time range for a new search in Splunk?",
    type: "single",
    answers: [
      { text: "A. Last 24 hours", correct: false, explain: "Incorrect. 24 hours is not the default." },
      { text: "B. All time", correct: false, explain: "Incorrect. All time is not default." },
      { text: "C. Last 60 minutes", correct: true, explain: "Correct! The default time range is last 60 minutes." },
      { text: "D. Last 7 days", correct: false, explain: "Incorrect. 7 days is not default." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command is used to extract new fields?",
    type: "single",
    answers: [
      { text: "A. fields", correct: false, explain: "Incorrect. fields selects, not extracts." },
      { text: "B. extract", correct: true, explain: "Correct! extract is used to extract fields." },
      { text: "C. where", correct: false, explain: "Incorrect. where is for filtering." },
      { text: "D. eval", correct: false, explain: "Incorrect. eval creates new fields, but not extraction." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What happens when you click on a value in a Splunk search result table?",
    type: "single",
    answers: [
      { text: "A. The search is filtered to show only results with that value.", correct: true, explain: "Correct! Clicking filters results by that value." },
      { text: "B. The event is deleted.", correct: false, explain: "Incorrect. Clicking does not delete events." },
      { text: "C. The value is copied to clipboard.", correct: false, explain: "Incorrect. Not the default action." },
      { text: "D. A chart is automatically created.", correct: false, explain: "Incorrect. No chart is created by clicking." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command is used to display only specified fields?",
    type: "single",
    answers: [
      { text: "A. table", correct: true, explain: "Correct! table displays only listed fields." },
      { text: "B. search", correct: false, explain: "Incorrect. search filters results." },
      { text: "C. eval", correct: false, explain: "Incorrect. eval creates new fields." },
      { text: "D. stats", correct: false, explain: "Incorrect. stats summarizes, not displays only." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command would you use to show the top values of a field in Splunk?",
    type: "single",
    answers: [
      { text: "A. stats", correct: false, explain: "Incorrect. stats summarizes, not shows top values." },
      { text: "B. top", correct: true, explain: "Correct! top shows the most common values." },
      { text: "C. rare", correct: false, explain: "Incorrect. rare shows least common values." },
      { text: "D. fields", correct: false, explain: "Incorrect. fields does not show top values." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is a way to schedule an alert in Splunk?",
    type: "single",
    answers: [
      { text: "A. Use the alert scheduling tab in the alert editor.", correct: true, explain: "Correct! Scheduling is in the alert editor." },
      { text: "B. Use the dedup command.", correct: false, explain: "Incorrect. dedup is not for scheduling." },
      { text: "C. Use the rare command.", correct: false, explain: "Incorrect. rare is not for scheduling." },
      { text: "D. Use the settings menu only.", correct: false, explain: "Incorrect. Scheduling is not only in settings." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How can you share a Splunk dashboard with others?",
    type: "single",
    answers: [
      { text: "A. Save it as a private dashboard.", correct: false, explain: "Incorrect. Private dashboards cannot be shared." },
      { text: "B. Set permissions to shared in the dashboard editor.", correct: true, explain: "Correct! Set permissions to shared." },
      { text: "C. Use the rare command.", correct: false, explain: "Incorrect. rare is not for sharing." },
      { text: "D. Export to CSV only.", correct: false, explain: "Incorrect. Export is not sharing." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk feature allows you to automatically trigger actions based on search results?",
    type: "single",
    answers: [
      { text: "A. Alerts", correct: true, explain: "Correct! Alerts trigger actions." },
      { text: "B. Lookups", correct: false, explain: "Incorrect. Lookups enrich events, not trigger actions." },
      { text: "C. Events", correct: false, explain: "Incorrect. Events are data, not actions." },
      { text: "D. Stats", correct: false, explain: "Incorrect. Stats summarize data, not actions." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How can you save a search for future use in Splunk?",
    type: "single",
    answers: [
      { text: "A. Save as report", correct: true, explain: "Correct! Reports save searches." },
      { text: "B. Save as table", correct: false, explain: "Incorrect. Table is not a save format." },
      { text: "C. Save as event", correct: false, explain: "Incorrect. Event is not a save format." },
      { text: "D. Save as alert only.", correct: false, explain: "Incorrect. Alerts are only for triggering, not for general use." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the fields command do in a Splunk search?",
    type: "single",
    answers: [
      { text: "A. Selects which fields to display in results.", correct: true, explain: "Correct! fields lets you control displayed fields." },
      { text: "B. Removes duplicate events.", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "C. Creates a new field.", correct: false, explain: "Incorrect. eval creates new fields." },
      { text: "D. Schedules a search.", correct: false, explain: "Incorrect. Scheduling is not fields' job." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which option lets you export Splunk search results?",
    type: "single",
    answers: [
      { text: "A. Export to CSV", correct: true, explain: "Correct! Export to CSV is available." },
      { text: "B. Save as alert", correct: false, explain: "Incorrect. Alert is not for exporting." },
      { text: "C. Save as report only", correct: false, explain: "Incorrect. Report is not for export." },
      { text: "D. Table command", correct: false, explain: "Incorrect. Table displays but does not export." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which type of Splunk field is extracted automatically at index time?",
    type: "single",
    answers: [
      { text: "A. Indexed fields", correct: true, explain: "Correct! Indexed fields are extracted at index time." },
      { text: "B. Search time fields", correct: false, explain: "Incorrect. Search time fields are extracted later." },
      { text: "C. User fields", correct: false, explain: "Incorrect. User fields are not relevant." },
      { text: "D. Session fields", correct: false, explain: "Incorrect. Session fields are not a standard type." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following Splunk roles can create and schedule alerts by default?",
    type: "single",
    answers: [
      { text: "A. Power", correct: true, explain: "Correct! The Power role has this capability by default." },
      { text: "B. User", correct: false, explain: "Incorrect. User role cannot schedule alerts by default." },
      { text: "C. Admin only", correct: false, explain: "Incorrect. Admin and Power can both schedule alerts." },
      { text: "D. Viewer", correct: false, explain: "Incorrect. Viewer cannot create alerts." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the main difference between real-time and scheduled alerts in Splunk?",
    type: "single",
    answers: [
      { text: "A. Real-time alerts run continuously, scheduled alerts run at set times.", correct: true, explain: "Correct! Real-time = continuous; scheduled = set interval." },
      { text: "B. Real-time alerts can only send emails.", correct: false, explain: "Incorrect." },
      { text: "C. Scheduled alerts can't send notifications.", correct: false, explain: "Incorrect." },
      { text: "D. There is no difference.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is NOT a valid Splunk search mode?",
    type: "single",
    answers: [
      { text: "A. Fast", correct: false, explain: "Incorrect. Fast is valid." },
      { text: "B. Smart", correct: false, explain: "Incorrect. Smart is valid." },
      { text: "C. Verbose", correct: false, explain: "Incorrect. Verbose is valid." },
      { text: "D. Extended", correct: true, explain: "Correct! Extended is not a valid search mode." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field in Splunk is used as the unique event identifier?",
    type: "single",
    answers: [
      { text: "A. _raw", correct: false, explain: "Incorrect. _raw is the event text." },
      { text: "B. _time", correct: false, explain: "Incorrect. _time is the event timestamp." },
      { text: "C. _eventid", correct: false, explain: "Incorrect. _eventid is not a standard field." },
      { text: "D. _cd", correct: true, explain: "Correct! _cd is the unique event identifier." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the primary purpose of the eval command in Splunk?",
    type: "single",
    answers: [
      { text: "A. Filter events.", correct: false, explain: "Incorrect. Filtering is not eval's main purpose." },
      { text: "B. Create or modify fields.", correct: true, explain: "Correct! Eval is used for field calculations." },
      { text: "C. Group events.", correct: false, explain: "Incorrect. Grouping is for stats." },
      { text: "D. Remove duplicates.", correct: false, explain: "Incorrect. Dedup is for removing duplicates." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command is best for transforming event data into visualizations?",
    type: "single",
    answers: [
      { text: "A. eval", correct: false, explain: "Incorrect. eval creates new fields." },
      { text: "B. stats", correct: true, explain: "Correct! stats is used for summaries and charts." },
      { text: "C. where", correct: false, explain: "Incorrect. where is for filtering." },
      { text: "D. search", correct: false, explain: "Incorrect. search does not directly transform data." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the where command do in a Splunk search?",
    type: "single",
    answers: [
      { text: "A. It filters results based on conditions.", correct: true, explain: "Correct! where applies conditions to filter results." },
      { text: "B. It summarizes results.", correct: false, explain: "Incorrect. stats summarizes." },
      { text: "C. It removes duplicate results.", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "D. It visualizes results.", correct: false, explain: "Incorrect. where does not visualize." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command is used to find the least common values of a field?",
    type: "single",
    answers: [
      { text: "A. rare", correct: true, explain: "Correct! rare finds the least common values." },
      { text: "B. top", correct: false, explain: "Incorrect. top is for the most common values." },
      { text: "C. stats", correct: false, explain: "Incorrect. stats is for summaries." },
      { text: "D. table", correct: false, explain: "Incorrect. table displays specified fields." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk role has full admin access by default?",
    type: "single",
    answers: [
      { text: "A. Power", correct: false, explain: "Incorrect. Power has many permissions, but not full admin." },
      { text: "B. User", correct: false, explain: "Incorrect. User does not have admin permissions." },
      { text: "C. Admin", correct: true, explain: "Correct! Admin has full access by default." },
      { text: "D. Viewer", correct: false, explain: "Incorrect. Viewer is read-only." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command allows you to calculate statistical values such as sum and average?",
    type: "single",
    answers: [
      { text: "A. stats", correct: true, explain: "Correct! stats computes sums, averages, and more." },
      { text: "B. eval", correct: false, explain: "Incorrect. eval calculates new fields, not statistics." },
      { text: "C. table", correct: false, explain: "Incorrect. table only displays data." },
      { text: "D. search", correct: false, explain: "Incorrect. search is for filtering." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following search commands returns the first value of a field?",
    type: "single",
    answers: [
      { text: "A. last", correct: false, explain: "Incorrect. last returns the last value." },
      { text: "B. top", correct: false, explain: "Incorrect. top returns the most common values." },
      { text: "C. first", correct: true, explain: "Correct! first returns the first value found." },
      { text: "D. rare", correct: false, explain: "Incorrect. rare returns least common values." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How does Splunk handle time zones by default?",
    type: "single",
    answers: [
      { text: "A. Uses the indexer time zone for all events.", correct: false, explain: "Incorrect. User preference can override indexer zone." },
      { text: "B. Uses the user's preferred time zone.", correct: true, explain: "Correct! Splunk displays events in the user's chosen time zone." },
      { text: "C. Uses UTC always.", correct: false, explain: "Incorrect. Not always UTC." },
      { text: "D. Uses the search head time zone only.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the Splunk lookup definition used for?",
    type: "single",
    answers: [
      { text: "A. To specify how a lookup table is used in a search.", correct: true, explain: "Correct! Lookup definitions tell Splunk how to apply lookups." },
      { text: "B. To remove duplicates.", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "C. To export dashboards.", correct: false, explain: "Incorrect. Export is unrelated." },
      { text: "D. To create alerts.", correct: false, explain: "Incorrect. Alerts are unrelated." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the default number of results shown per page in Splunk search results?",
    type: "single",
    answers: [
      { text: "A. 10", correct: false, explain: "Incorrect. 10 is not default." },
      { text: "B. 20", correct: false, explain: "Incorrect. 20 is not default." },
      { text: "C. 50", correct: false, explain: "Incorrect. 50 is not default." },
      { text: "D. 100", correct: true, explain: "Correct! 100 results per page is the default." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field in Splunk contains the raw event data?",
    type: "single",
    answers: [
      { text: "A. _raw", correct: true, explain: "Correct! _raw contains the full event text." },
      { text: "B. _time", correct: false, explain: "Incorrect. _time is the timestamp." },
      { text: "C. host", correct: false, explain: "Incorrect. host is the source host." },
      { text: "D. sourcetype", correct: false, explain: "Incorrect. sourcetype is the data type." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the purpose of Splunk's eventtype field?",
    type: "single",
    answers: [
      { text: "A. Categorizes events based on search criteria.", correct: true, explain: "Correct! eventtype is used for event categorization." },
      { text: "B. Stores the original timestamp.", correct: false, explain: "Incorrect. _time stores timestamps." },
      { text: "C. Indicates the host name.", correct: false, explain: "Incorrect. host is for hostnames." },
      { text: "D. Shows the field extraction type.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk feature helps users save and reuse searches?",
    type: "single",
    answers: [
      { text: "A. Reports", correct: true, explain: "Correct! Reports are saved searches." },
      { text: "B. Dashboards only", correct: false, explain: "Incorrect. Dashboards show data but do not save searches by themselves." },
      { text: "C. Lookups", correct: false, explain: "Incorrect. Lookups are for data enrichment." },
      { text: "D. Table command", correct: false, explain: "Incorrect. Table is for formatting, not saving searches." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What type of Splunk app is used to extend functionality for specialized use cases?",
    type: "single",
    answers: [
      { text: "A. Custom app", correct: true, explain: "Correct! Custom apps extend Splunk for specific needs." },
      { text: "B. Core app", correct: false, explain: "Incorrect. Core apps are default features." },
      { text: "C. Indexer app", correct: false, explain: "Incorrect." },
      { text: "D. Event app", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command is used to remove specific fields from search results?",
    type: "single",
    answers: [
      { text: "A. fields -", correct: true, explain: "Correct! 'fields - <field>' removes fields from results." },
      { text: "B. table", correct: false, explain: "Incorrect. table shows specified fields." },
      { text: "C. dedup", correct: false, explain: "Incorrect. dedup removes duplicate events." },
      { text: "D. sort", correct: false, explain: "Incorrect. sort sorts results." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk rename command do?",
    type: "single",
    answers: [
      { text: "A. Changes the value of a field.", correct: false, explain: "Incorrect. rename changes field names, not values." },
      { text: "B. Changes the field name in results.", correct: true, explain: "Correct! rename renames a field in the output." },
      { text: "C. Deletes fields.", correct: false, explain: "Incorrect. fields - removes fields." },
      { text: "D. Hides fields from the user.", correct: false, explain: "Incorrect. rename does not hide fields." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the default sorting order of search results in Splunk?",
    type: "single",
    answers: [
      { text: "A. Chronological", correct: false, explain: "Incorrect. Not chronological." },
      { text: "B. Reverse chronological", correct: true, explain: "Correct! Most recent events are shown first." },
      { text: "C. Alphabetical", correct: false, explain: "Incorrect. Not alphabetical." },
      { text: "D. By host", correct: false, explain: "Incorrect. Not by host by default." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command do you use to create a field that is the result of an arithmetic operation?",
    type: "single",
    answers: [
      { text: "A. eval", correct: true, explain: "Correct! eval is used for calculations." },
      { text: "B. stats", correct: false, explain: "Incorrect. stats summarizes data." },
      { text: "C. table", correct: false, explain: "Incorrect. table does not create fields." },
      { text: "D. search", correct: false, explain: "Incorrect. search does not create fields." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command is used to display the least common values in a field?",
    type: "single",
    answers: [
      { text: "A. rare", correct: true, explain: "Correct! rare shows the least common values." },
      { text: "B. top", correct: false, explain: "Incorrect. top shows the most common." },
      { text: "C. dedup", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "D. stats", correct: false, explain: "Incorrect. stats summarizes data." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field stores the source type of each event in Splunk?",
    type: "single",
    answers: [
      { text: "A. source", correct: false, explain: "Incorrect. source is the file or input source." },
      { text: "B. sourcetype", correct: true, explain: "Correct! sourcetype is the field for data type." },
      { text: "C. type", correct: false, explain: "Incorrect. type is not a default field." },
      { text: "D. index", correct: false, explain: "Incorrect. index is the Splunk index, not the data type." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the main function of a Splunk indexer?",
    type: "single",
    answers: [
      { text: "A. Collects data from remote machines.", correct: false, explain: "Incorrect. Forwarders collect data." },
      { text: "B. Searches for events.", correct: false, explain: "Incorrect. Search heads do the searching." },
      { text: "C. Stores and indexes data.", correct: true, explain: "Correct! Indexers store and index data." },
      { text: "D. Manages user access.", correct: false, explain: "Incorrect. Access is managed elsewhere." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What role does the Splunk deployment server play?",
    type: "single",
    answers: [
      { text: "A. Stores and indexes data.", correct: false, explain: "Incorrect. Indexers do this." },
      { text: "B. Distributes configuration files to clients.", correct: true, explain: "Correct! Deployment servers distribute configs." },
      { text: "C. Runs scheduled searches.", correct: false, explain: "Incorrect. Search heads run searches." },
      { text: "D. Extracts fields at index time.", correct: false, explain: "Incorrect. Indexers extract fields at index time." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is NOT a default Splunk user role?",
    type: "single",
    answers: [
      { text: "A. Admin", correct: false, explain: "Incorrect. Admin is default." },
      { text: "B. Power", correct: false, explain: "Incorrect. Power is default." },
      { text: "C. User", correct: false, explain: "Incorrect. User is default." },
      { text: "D. Developer", correct: true, explain: "Correct! Developer is not a default Splunk role." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What command is used to filter search results based on a condition?",
    type: "single",
    answers: [
      { text: "A. where", correct: true, explain: "Correct! where applies conditions to filter results." },
      { text: "B. sort", correct: false, explain: "Incorrect. sort changes order." },
      { text: "C. table", correct: false, explain: "Incorrect. table displays fields." },
      { text: "D. rare", correct: false, explain: "Incorrect. rare finds uncommon values." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk summary index do?",
    type: "single",
    answers: [
      { text: "A. Stores data summaries for faster reporting.", correct: true, explain: "Correct! Summary indexes store data for fast reports." },
      { text: "B. Indexes all raw data.", correct: false, explain: "Incorrect. Main index indexes raw data." },
      { text: "C. Summarizes search history.", correct: false, explain: "Incorrect." },
      { text: "D. Stores user access logs.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command generates time series visualizations?",
    type: "single",
    answers: [
      { text: "A. timechart", correct: true, explain: "Correct! timechart is for time series data." },
      { text: "B. stats", correct: false, explain: "Incorrect. stats summarizes data." },
      { text: "C. table", correct: false, explain: "Incorrect. table displays fields." },
      { text: "D. dedup", correct: false, explain: "Incorrect. dedup removes duplicates." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which option best describes the Splunk forwarder?",
    type: "single",
    answers: [
      { text: "A. A component that collects data from remote sources and sends it to indexers.", correct: true, explain: "Correct! Forwarders gather and forward data." },
      { text: "B. A tool for configuring dashboards.", correct: false, explain: "Incorrect. Forwarders are for data, not dashboards." },
      { text: "C. A search optimization tool.", correct: false, explain: "Incorrect." },
      { text: "D. A visualization plugin.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command removes duplicate results from a Splunk search?",
    type: "single",
    answers: [
      { text: "A. dedup", correct: true, explain: "Correct! dedup removes duplicates." },
      { text: "B. rare", correct: false, explain: "Incorrect. rare finds uncommon values." },
      { text: "C. table", correct: false, explain: "Incorrect. table displays fields." },
      { text: "D. stats", correct: false, explain: "Incorrect. stats summarizes data." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk field identifies the data source of an event?",
    type: "single",
    answers: [
      { text: "A. sourcetype", correct: false, explain: "Incorrect. sourcetype is the type, not the source." },
      { text: "B. source", correct: true, explain: "Correct! source is the field for data origin." },
      { text: "C. index", correct: false, explain: "Incorrect. index is the storage location." },
      { text: "D. host", correct: false, explain: "Incorrect. host is the host machine." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk component allows users to run searches and create dashboards?",
    type: "single",
    answers: [
      { text: "A. Indexer", correct: false, explain: "Incorrect. Indexers store and index data." },
      { text: "B. Search head", correct: true, explain: "Correct! Search heads run searches and dashboards." },
      { text: "C. Forwarder", correct: false, explain: "Incorrect. Forwarders send data to indexers." },
      { text: "D. Deployment server", correct: false, explain: "Incorrect. Deployment servers manage configs." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the main function of Splunk's search head cluster?",
    type: "single",
    answers: [
      { text: "A. Provides search load balancing and redundancy.", correct: true, explain: "Correct! Search head clusters provide load balancing and high availability." },
      { text: "B. Manages index replication.", correct: false, explain: "Incorrect. Index clustering handles replication." },
      { text: "C. Sends data to indexers.", correct: false, explain: "Incorrect. Forwarders send data." },
      { text: "D. Manages user authentication.", correct: false, explain: "Incorrect. Authentication is a separate service." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which role in Splunk has the least privileges by default?",
    type: "single",
    answers: [
      { text: "A. User", correct: false, explain: "Incorrect. Viewer has less access." },
      { text: "B. Admin", correct: false, explain: "Incorrect. Admin is most privileged." },
      { text: "C. Power", correct: false, explain: "Incorrect. Power has more rights than User." },
      { text: "D. Viewer", correct: true, explain: "Correct! Viewer is the most restricted role." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command displays only events that match a Boolean condition?",
    type: "single",
    answers: [
      { text: "A. search", correct: false, explain: "Incorrect. search filters by keywords, not Boolean conditions specifically." },
      { text: "B. where", correct: true, explain: "Correct! where applies Boolean logic to filter." },
      { text: "C. table", correct: false, explain: "Incorrect. table formats results." },
      { text: "D. rare", correct: false, explain: "Incorrect. rare finds uncommon values." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following describes a Splunk app?",
    type: "single",
    answers: [
      { text: "A. A collection of knowledge objects, dashboards, and configurations.", correct: true, explain: "Correct! Apps bundle dashboards, knowledge, and more." },
      { text: "B. A single dashboard.", correct: false, explain: "Incorrect. An app can contain many dashboards." },
      { text: "C. Only search commands.", correct: false, explain: "Incorrect. Apps include more than commands." },
      { text: "D. An indexer configuration file.", correct: false, explain: "Incorrect. Indexer configs are not apps." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field shows when an event occurred in Splunk?",
    type: "single",
    answers: [
      { text: "A. _time", correct: true, explain: "Correct! _time is the event timestamp." },
      { text: "B. host", correct: false, explain: "Incorrect. host is the source machine." },
      { text: "C. _raw", correct: false, explain: "Incorrect. _raw is the event text." },
      { text: "D. index", correct: false, explain: "Incorrect. index is the storage location." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How can you display results in a tabular format in Splunk?",
    type: "single",
    answers: [
      { text: "A. Use the table command.", correct: true, explain: "Correct! table displays results in table format." },
      { text: "B. Use the dedup command.", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "C. Use the rare command.", correct: false, explain: "Incorrect. rare finds uncommon values." },
      { text: "D. Use the eval command.", correct: false, explain: "Incorrect. eval creates new fields." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the main purpose of Splunk's Smart Mode?",
    type: "single",
    answers: [
      { text: "A. Balances speed and field discovery.", correct: true, explain: "Correct! Smart Mode balances speed and field discovery." },
      { text: "B. Maximizes performance only.", correct: false, explain: "Incorrect. Smart Mode is not just about speed." },
      { text: "C. Discovers all fields only.", correct: false, explain: "Incorrect. Verbose Mode is for field discovery." },
      { text: "D. Minimizes performance.", correct: false, explain: "Incorrect. Smart Mode is not slow." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command is used to create new calculated fields in Splunk?",
    type: "single",
    answers: [
      { text: "A. stats", correct: false, explain: "Incorrect. stats summarizes data." },
      { text: "B. eval", correct: true, explain: "Correct! eval creates new calculated fields." },
      { text: "C. table", correct: false, explain: "Incorrect. table displays fields." },
      { text: "D. dedup", correct: false, explain: "Incorrect. dedup removes duplicates." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the default maximum number of search results exported to CSV in Splunk?",
    type: "single",
    answers: [
      { text: "A. 5000", correct: true, explain: "Correct! The default export limit is 5000 results." },
      { text: "B. 1000", correct: false, explain: "Incorrect. 1000 is not the default." },
      { text: "C. 100", correct: false, explain: "Incorrect. 100 is not the default." },
      { text: "D. Unlimited", correct: false, explain: "Incorrect. There is a default limit." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk component is responsible for storing indexed data?",
    type: "single",
    answers: [
      { text: "A. Forwarder", correct: false, explain: "Incorrect. Forwarders do not store data." },
      { text: "B. Indexer", correct: true, explain: "Correct! Indexers store indexed data." },
      { text: "C. Search head", correct: false, explain: "Incorrect. Search heads do not store data." },
      { text: "D. Deployment server", correct: false, explain: "Incorrect. Deployment servers do not store data." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is NOT a Splunk search command?",
    type: "single",
    answers: [
      { text: "A. table", correct: false, explain: "Incorrect. table is a search command." },
      { text: "B. rare", correct: false, explain: "Incorrect. rare is a search command." },
      { text: "C. stats", correct: false, explain: "Incorrect. stats is a search command." },
      { text: "D. collect", correct: true, explain: "Correct! collect is not a standard search command." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What happens if you omit the 'by' clause from the stats command?",
    type: "single",
    answers: [
      { text: "A. It returns summary statistics for all events.", correct: true, explain: "Correct! Without 'by', stats summarizes all events." },
      { text: "B. It returns no results.", correct: false, explain: "Incorrect. It returns summary statistics." },
      { text: "C. It errors out.", correct: false, explain: "Incorrect. No error occurs." },
      { text: "D. It groups by all fields.", correct: false, explain: "Incorrect. It does not group." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How do you display only the source and sourcetype fields in results?",
    type: "single",
    answers: [
      { text: "A. fields source sourcetype", correct: true, explain: "Correct! fields source sourcetype displays those fields." },
      { text: "B. table source sourcetype", correct: false, explain: "Incorrect. table also displays those fields, but fields command is standard." },
      { text: "C. stats source sourcetype", correct: false, explain: "Incorrect. stats summarizes data." },
      { text: "D. dedup source sourcetype", correct: false, explain: "Incorrect. dedup removes duplicates." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the effect of using 'sort - _time' in a Splunk search?",
    type: "single",
    answers: [
      { text: "A. Sorts events in ascending order by time.", correct: false, explain: "Incorrect. Negative sign sorts in descending order." },
      { text: "B. Sorts events in descending order by time.", correct: true, explain: "Correct! Negative sign = descending order." },
      { text: "C. Removes the _time field.", correct: false, explain: "Incorrect. sort does not remove fields." },
      { text: "D. Sorts events randomly.", correct: false, explain: "Incorrect. No random sort." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command can you use to group events by host?",
    type: "single",
    answers: [
      { text: "A. stats count by host", correct: true, explain: "Correct! stats ... by host groups by host." },
      { text: "B. dedup host", correct: false, explain: "Incorrect. dedup removes duplicates by host." },
      { text: "C. table host", correct: false, explain: "Incorrect. table displays host." },
      { text: "D. search host", correct: false, explain: "Incorrect. search finds events with host." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following commands is best for counting the number of events for each sourcetype?",
    type: "single",
    answers: [
      { text: "A. stats count by sourcetype", correct: true, explain: "Correct! This groups event counts by sourcetype." },
      { text: "B. dedup sourcetype", correct: false, explain: "Incorrect. dedup removes duplicate sourcetype values." },
      { text: "C. sort sourcetype", correct: false, explain: "Incorrect. sort only orders results." },
      { text: "D. rare sourcetype", correct: false, explain: "Incorrect. rare finds least common values." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command is best for identifying spikes in data over time?",
    type: "single",
    answers: [
      { text: "A. timechart", correct: true, explain: "Correct! timechart reveals spikes over time." },
      { text: "B. rare", correct: false, explain: "Incorrect. rare is not for time analysis." },
      { text: "C. dedup", correct: false, explain: "Incorrect. dedup is for duplicates." },
      { text: "D. table", correct: false, explain: "Incorrect. table is for formatting only." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How would you show only the top 3 sources in your search results?",
    type: "single",
    answers: [
      { text: "A. top 3 source", correct: true, explain: "Correct! top 3 source gives top 3 sources." },
      { text: "B. stats count by source | head 3", correct: false, explain: "Incorrect. This would work but is not the direct method." },
      { text: "C. dedup 3 source", correct: false, explain: "Incorrect. dedup does not limit by count in this way." },
      { text: "D. sort -count", correct: false, explain: "Incorrect. sort does not limit result count directly." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How do you limit the number of results returned by a Splunk search?",
    type: "single",
    answers: [
      { text: "A. Using the head command", correct: true, explain: "Correct! head limits result count." },
      { text: "B. Using the rare command", correct: false, explain: "Incorrect. rare is for least common values." },
      { text: "C. Using the dedup command", correct: false, explain: "Incorrect. dedup removes duplicates, not limit results." },
      { text: "D. Using the stats command", correct: false, explain: "Incorrect. stats summarizes data." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field is automatically extracted at index time in Splunk?",
    type: "single",
    answers: [
      { text: "A. host", correct: true, explain: "Correct! host is indexed at index time." },
      { text: "B. source", correct: false, explain: "Incorrect. source is extracted at search time." },
      { text: "C. user", correct: false, explain: "Incorrect. user is not standard." },
      { text: "D. fieldA", correct: false, explain: "Incorrect. fieldA is not a standard field." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which role can configure knowledge objects for all users by default?",
    type: "single",
    answers: [
      { text: "A. Power", correct: false, explain: "Incorrect. Only admin can do this by default." },
      { text: "B. User", correct: false, explain: "Incorrect." },
      { text: "C. Admin", correct: true, explain: "Correct! Admin can configure knowledge objects for all." },
      { text: "D. Viewer", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the primary function of a deployment server in Splunk?",
    type: "single",
    answers: [
      { text: "A. Forwarding data to indexers.", correct: false, explain: "Incorrect. Forwarders send data, not deployment server." },
      { text: "B. Distributing configuration updates to clients.", correct: true, explain: "Correct! Deployment server distributes configs." },
      { text: "C. Running scheduled reports.", correct: false, explain: "Incorrect." },
      { text: "D. Extracting fields at search time.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk AppInspect tool do?",
    type: "single",
    answers: [
      { text: "A. Validates Splunk apps for best practices.", correct: true, explain: "Correct! AppInspect checks apps for compliance." },
      { text: "B. Monitors server CPU usage.", correct: false, explain: "Incorrect." },
      { text: "C. Indexes event data.", correct: false, explain: "Incorrect." },
      { text: "D. Manages forwarder deployment.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following describes Splunk Knowledge Objects?",
    type: "single",
    answers: [
      { text: "A. User-created entities for enriching searches.", correct: true, explain: "Correct! Knowledge Objects enrich and accelerate searches." },
      { text: "B. Internal Splunk configuration files only.", correct: false, explain: "Incorrect." },
      { text: "C. Raw data files.", correct: false, explain: "Incorrect." },
      { text: "D. Index files.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which component allows Splunk to ingest data from cloud services?",
    type: "single",
    answers: [
      { text: "A. Splunk Add-ons", correct: true, explain: "Correct! Add-ons enable cloud data ingestion." },
      { text: "B. Indexers", correct: false, explain: "Incorrect." },
      { text: "C. Search heads", correct: false, explain: "Incorrect." },
      { text: "D. Forwarders only", correct: false, explain: "Incorrect. Forwarders are not cloud-specific." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which feature provides access control in Splunk?",
    type: "single",
    answers: [
      { text: "A. User roles", correct: true, explain: "Correct! Roles provide access control." },
      { text: "B. Indexes", correct: false, explain: "Incorrect." },
      { text: "C. Knowledge objects", correct: false, explain: "Incorrect." },
      { text: "D. Apps", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What command is used to find events with a field value matching a pattern?",
    type: "single",
    answers: [
      { text: "A. search field=value", correct: true, explain: "Correct! search field=value finds matching events." },
      { text: "B. eval field=value", correct: false, explain: "Incorrect." },
      { text: "C. dedup field=value", correct: false, explain: "Incorrect." },
      { text: "D. top field=value", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk license type is required for distributed search?",
    type: "single",
    answers: [
      { text: "A. Free", correct: false, explain: "Incorrect. Free does not support distributed search." },
      { text: "B. Enterprise", correct: true, explain: "Correct! Enterprise supports distributed search." },
      { text: "C. Developer", correct: false, explain: "Incorrect." },
      { text: "D. Cloud trial", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How does Splunk handle duplicate events in search results by default?",
    type: "single",
    answers: [
      { text: "A. Displays all matching events, including duplicates.", correct: true, explain: "Correct! All matching events are displayed." },
      { text: "B. Removes duplicates automatically.", correct: false, explain: "Incorrect. dedup removes duplicates if used." },
      { text: "C. Flags duplicates for review.", correct: false, explain: "Incorrect." },
      { text: "D. Groups duplicates together.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field in Splunk is the event timestamp?",
    type: "single",
    answers: [
      { text: "A. _time", correct: true, explain: "Correct! _time stores the event timestamp." },
      { text: "B. host", correct: false, explain: "Incorrect." },
      { text: "C. source", correct: false, explain: "Incorrect." },
      { text: "D. sourcetype", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk component is responsible for receiving and indexing incoming data?",
    type: "single",
    answers: [
      { text: "A. Search head", correct: false, explain: "Incorrect. Search heads do not index data." },
      { text: "B. Indexer", correct: true, explain: "Correct! Indexers receive and index incoming data." },
      { text: "C. Deployment server", correct: false, explain: "Incorrect. Deployment servers distribute configs." },
      { text: "D. Forwarder", correct: false, explain: "Incorrect. Forwarders send data to indexers." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following best describes a Splunk forwarder?",
    type: "single",
    answers: [
      { text: "A. Collects and forwards data to indexers.", correct: true, explain: "Correct! Forwarders collect and forward data." },
      { text: "B. Indexes data.", correct: false, explain: "Incorrect. Indexers handle indexing." },
      { text: "C. Runs scheduled searches.", correct: false, explain: "Incorrect." },
      { text: "D. Stores raw event data.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the main benefit of a clustered Splunk indexer environment?",
    type: "single",
    answers: [
      { text: "A. Allows scheduled searches to run faster.", correct: false, explain: "Incorrect. Clustering is for redundancy and scaling." },
      { text: "B. Provides data redundancy and high availability.", correct: true, explain: "Correct! Clustered indexers provide redundancy." },
      { text: "C. Speeds up data forwarding.", correct: false, explain: "Incorrect." },
      { text: "D. Simplifies dashboard configuration.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which feature in Splunk ensures that the same data is available even if an indexer fails?",
    type: "single",
    answers: [
      { text: "A. Replication factor", correct: true, explain: "Correct! Replication factor maintains data availability." },
      { text: "B. Search head clustering", correct: false, explain: "Incorrect. Indexer clustering is for data redundancy." },
      { text: "C. Forwarder management", correct: false, explain: "Incorrect." },
      { text: "D. Knowledge objects", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk component manages distributed search requests?",
    type: "single",
    answers: [
      { text: "A. Indexer", correct: false, explain: "Incorrect. Indexers index and search, but do not manage requests." },
      { text: "B. Deployment server", correct: false, explain: "Incorrect. Deployment servers distribute configs." },
      { text: "C. Search head", correct: true, explain: "Correct! Search heads manage distributed search." },
      { text: "D. Forwarder", correct: false, explain: "Incorrect. Forwarders do not manage searches." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How does a Splunk Universal Forwarder differ from a Heavy Forwarder?",
    type: "single",
    answers: [
      { text: "A. Universal Forwarders do not parse data, Heavy Forwarders can parse and index data.", correct: true, explain: "Correct! UF is lightweight, HF can parse/index." },
      { text: "B. Universal Forwarders are only used for dashboards.", correct: false, explain: "Incorrect. UF is for data collection." },
      { text: "C. Heavy Forwarders cannot send data to indexers.", correct: false, explain: "Incorrect. Both can send data." },
      { text: "D. Universal Forwarders only support Windows.", correct: false, explain: "Incorrect. UF supports many OSes." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the function of a deployment server in Splunk?",
    type: "single",
    answers: [
      { text: "A. Deploys configurations to forwarders and indexers.", correct: true, explain: "Correct! Deployment servers manage configs for clients." },
      { text: "B. Indexes incoming data.", correct: false, explain: "Incorrect. Indexers do this." },
      { text: "C. Creates knowledge objects.", correct: false, explain: "Incorrect." },
      { text: "D. Runs distributed searches.", correct: false, explain: "Incorrect. Search heads do this." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is a Splunk app?",
    type: "single",
    answers: [
      { text: "A. A package of dashboards, reports, and configurations for a specific purpose.", correct: true, explain: "Correct! Apps package dashboards and configs." },
      { text: "B. An indexer configuration.", correct: false, explain: "Incorrect." },
      { text: "C. A search command.", correct: false, explain: "Incorrect." },
      { text: "D. A field extraction.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How can you deploy a new dashboard to all users in a Splunk environment?",
    type: "single",
    answers: [
      { text: "A. Save it as a private dashboard.", correct: false, explain: "Incorrect. Private dashboards are not shared." },
      { text: "B. Share the dashboard and change its permissions.", correct: true, explain: "Correct! Sharing and permission settings make dashboards available to others." },
      { text: "C. Use the rare command.", correct: false, explain: "Incorrect." },
      { text: "D. Export to CSV.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following best describes a Splunk Knowledge Object?",
    type: "single",
    answers: [
      { text: "A. A user-created entity that enriches search results.", correct: true, explain: "Correct! Knowledge objects enrich searches." },
      { text: "B. An indexed data file.", correct: false, explain: "Incorrect." },
      { text: "C. A forwarder.", correct: false, explain: "Incorrect." },
      { text: "D. An index cluster.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which search command finds the highest value in a numeric field?",
    type: "single",
    answers: [
      { text: "A. max", correct: true, explain: "Correct! max returns the highest value." },
      { text: "B. top", correct: false, explain: "Incorrect. top finds most common values." },
      { text: "C. rare", correct: false, explain: "Incorrect." },
      { text: "D. dedup", correct: false, explain: "Incorrect. dedup removes duplicates." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How do you include only specific fields in your search results?",
    type: "single",
    answers: [
      { text: "A. Use the fields command with a + sign.", correct: true, explain: "Correct! fields + <field> includes specific fields." },
      { text: "B. Use the table command only.", correct: false, explain: "Incorrect. table displays fields, but fields + is direct inclusion." },
      { text: "C. Use the dedup command.", correct: false, explain: "Incorrect." },
      { text: "D. Use the eval command.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk stats command do?",
    type: "single",
    answers: [
      { text: "A. Summarizes data based on specified fields.", correct: true, explain: "Correct! stats summarizes data." },
      { text: "B. Finds the rarest value.", correct: false, explain: "Incorrect. rare does that." },
      { text: "C. Removes duplicate results.", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "D. Exports results to CSV.", correct: false, explain: "Incorrect. Export is a separate feature." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk field stores the time an event was indexed?",
    type: "single",
    answers: [
      { text: "A. _indextime", correct: true, explain: "Correct! _indextime stores indexing time." },
      { text: "B. _time", correct: false, explain: "Incorrect. _time is event timestamp." },
      { text: "C. _raw", correct: false, explain: "Incorrect. _raw is event text." },
      { text: "D. sourcetype", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the primary use of Splunk macros?",
    type: "single",
    answers: [
      { text: "A. Reusable search logic.", correct: true, explain: "Correct! Macros allow for reusable logic." },
      { text: "B. Creating dashboards.", correct: false, explain: "Incorrect." },
      { text: "C. Indexing data.", correct: false, explain: "Incorrect." },
      { text: "D. Field extraction.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the function of a Splunk search head?",
    type: "single",
    answers: [
      { text: "A. Receives data from forwarders.", correct: false, explain: "Incorrect. Indexers receive data from forwarders." },
      { text: "B. Runs searches and returns results to users.", correct: true, explain: "Correct! Search heads handle user queries and return results." },
      { text: "C. Stores and indexes data.", correct: false, explain: "Incorrect. Indexers do this." },
      { text: "D. Manages app installations.", correct: false, explain: "Incorrect. App installations are managed within Splunk Web or CLI." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk role has the ability to create data models by default?",
    type: "single",
    answers: [
      { text: "A. Admin", correct: true, explain: "Correct! Only the admin role can create data models by default." },
      { text: "B. Power", correct: false, explain: "Incorrect. Power users can't create data models unless permissions are granted." },
      { text: "C. User", correct: false, explain: "Incorrect. Regular users can't create data models by default." },
      { text: "D. Viewer", correct: false, explain: "Incorrect. Viewers cannot create any objects." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command can be used to combine results from multiple searches?",
    type: "single",
    answers: [
      { text: "A. append", correct: true, explain: "Correct! append is used to combine search results." },
      { text: "B. dedup", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "C. rare", correct: false, explain: "Incorrect. rare finds uncommon values." },
      { text: "D. stats", correct: false, explain: "Incorrect. stats summarizes results." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which type of Splunk field extraction occurs at search time?",
    type: "single",
    answers: [
      { text: "A. Search time field extraction", correct: true, explain: "Correct! Most extractions happen at search time." },
      { text: "B. Index time field extraction", correct: false, explain: "Incorrect. Some fields are extracted at index time, but most at search time." },
      { text: "C. Host extraction", correct: false, explain: "Incorrect. Host is indexed at index time." },
      { text: "D. Source extraction", correct: false, explain: "Incorrect. Source is also indexed at index time." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which search command in Splunk is used for correlation searches?",
    type: "single",
    answers: [
      { text: "A. transaction", correct: true, explain: "Correct! transaction is used to correlate events." },
      { text: "B. rare", correct: false, explain: "Incorrect. rare is not for correlation." },
      { text: "C. stats", correct: false, explain: "Incorrect. stats is for aggregation." },
      { text: "D. dedup", correct: false, explain: "Incorrect. dedup is for removing duplicates." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is a benefit of using summary indexing in Splunk?",
    type: "single",
    answers: [
      { text: "A. Improves report performance by pre-summarizing data.", correct: true, explain: "Correct! Summary indexing speeds up reporting." },
      { text: "B. Increases raw data retention.", correct: false, explain: "Incorrect." },
      { text: "C. Simplifies dashboard creation.", correct: false, explain: "Incorrect." },
      { text: "D. Adds new data fields.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is a Splunk knowledge bundle?",
    type: "single",
    answers: [
      { text: "A. A collection of apps and configurations distributed to indexers.", correct: true, explain: "Correct! Knowledge bundles are sent to indexers." },
      { text: "B. A saved search.", correct: false, explain: "Incorrect." },
      { text: "C. A user role.", correct: false, explain: "Incorrect." },
      { text: "D. A field extraction.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk feature can be used to speed up data model acceleration?",
    type: "single",
    answers: [
      { text: "A. Summary indexing", correct: true, explain: "Correct! Summary indexing accelerates data models." },
      { text: "B. Deduplication", correct: false, explain: "Incorrect." },
      { text: "C. Macro usage", correct: false, explain: "Incorrect." },
      { text: "D. Field extraction", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk field extractor do?",
    type: "single",
    answers: [
      { text: "A. Helps users extract new fields from event data.", correct: true, explain: "Correct! Field extractor assists with field extraction." },
      { text: "B. Removes events from the index.", correct: false, explain: "Incorrect." },
      { text: "C. Hides sensitive data.", correct: false, explain: "Incorrect." },
      { text: "D. Exports dashboards.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command allows you to visualize event frequency over time?",
    type: "single",
    answers: [
      { text: "A. timechart", correct: true, explain: "Correct! timechart visualizes frequency over time." },
      { text: "B. stats", correct: false, explain: "Incorrect. stats is not a time visualization." },
      { text: "C. rare", correct: false, explain: "Incorrect." },
      { text: "D. dedup", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does Splunk's event sampling do?",
    type: "single",
    answers: [
      { text: "A. Reduces the number of events displayed for faster searches.", correct: true, explain: "Correct! Event sampling makes searches faster." },
      { text: "B. Deletes duplicate events.", correct: false, explain: "Incorrect." },
      { text: "C. Indexes raw data.", correct: false, explain: "Incorrect." },
      { text: "D. Encrypts event data.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the primary function of Splunk's deployment server?",
    type: "single",
    answers: [
      { text: "A. Distributes configuration files to forwarders and indexers.", correct: true, explain: "Correct! Deployment server manages configs for clients." },
      { text: "B. Stores raw event data.", correct: false, explain: "Incorrect." },
      { text: "C. Manages dashboards.", correct: false, explain: "Incorrect." },
      { text: "D. Runs distributed searches.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command allows you to split results by values of a field?",
    type: "single",
    answers: [
      { text: "A. by", correct: false, explain: "Incorrect. by is a clause, not a command." },
      { text: "B. stats by", correct: true, explain: "Correct! stats ... by <field> splits results." },
      { text: "C. dedup", correct: false, explain: "Incorrect." },
      { text: "D. sort", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command can be used to filter out unwanted results?",
    type: "single",
    answers: [
      { text: "A. search NOT", correct: true, explain: "Correct! search NOT filters out unwanted results." },
      { text: "B. dedup", correct: false, explain: "Incorrect." },
      { text: "C. table", correct: false, explain: "Incorrect." },
      { text: "D. rare", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command can return the most frequent values of a field?",
    type: "single",
    answers: [
      { text: "A. top", correct: true, explain: "Correct! top shows most common values." },
      { text: "B. rare", correct: false, explain: "Incorrect. rare shows least common." },
      { text: "C. stats", correct: false, explain: "Incorrect. stats summarizes." },
      { text: "D. table", correct: false, explain: "Incorrect. table formats." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which search command in Splunk is used to group and summarize data for visualization?",
    type: "single",
    answers: [
      { text: "A. stats", correct: true, explain: "Correct! stats is the go-to for grouping and summarizing." },
      { text: "B. dedup", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "C. rare", correct: false, explain: "Incorrect. rare is for least common." },
      { text: "D. eval", correct: false, explain: "Incorrect. eval calculates new fields." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the best practice for filtering events in a Splunk search?",
    type: "single",
    answers: [
      { text: "A. Filter as early as possible.", correct: true, explain: "Correct! Early filtering improves performance." },
      { text: "B. Filter at the end of the search.", correct: false, explain: "Incorrect. Filter early for best performance." },
      { text: "C. Only filter with the fields command.", correct: false, explain: "Incorrect." },
      { text: "D. Do not filter, always search all data.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command can you use to remove duplicate events based on a specific field?",
    type: "single",
    answers: [
      { text: "A. dedup", correct: true, explain: "Correct! dedup removes duplicates by field." },
      { text: "B. stats", correct: false, explain: "Incorrect." },
      { text: "C. table", correct: false, explain: "Incorrect." },
      { text: "D. rare", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How do you limit Splunk results to the first 10 events?",
    type: "single",
    answers: [
      { text: "A. head 10", correct: true, explain: "Correct! head 10 gives first 10 results." },
      { text: "B. dedup 10", correct: false, explain: "Incorrect." },
      { text: "C. tail 10", correct: false, explain: "Incorrect. tail returns last 10." },
      { text: "D. sort 10", correct: false, explain: "Incorrect. sort does not limit results." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk 'rex' command do?",
    type: "single",
    answers: [
      { text: "A. Extracts fields using regular expressions.", correct: true, explain: "Correct! rex is for regex-based field extraction." },
      { text: "B. Removes duplicate events.", correct: false, explain: "Incorrect." },
      { text: "C. Groups results by field.", correct: false, explain: "Incorrect." },
      { text: "D. Schedules reports.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which search command will display results in a time-series chart?",
    type: "single",
    answers: [
      { text: "A. timechart", correct: true, explain: "Correct! timechart displays results over time." },
      { text: "B. table", correct: false, explain: "Incorrect. table does not create time-series charts." },
      { text: "C. rare", correct: false, explain: "Incorrect." },
      { text: "D. dedup", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following describes a Splunk alert?",
    type: "single",
    answers: [
      { text: "A. A saved search that triggers actions when conditions are met.", correct: true, explain: "Correct! Alerts are saved searches with triggers." },
      { text: "B. A dashboard visualization.", correct: false, explain: "Incorrect." },
      { text: "C. An index configuration.", correct: false, explain: "Incorrect." },
      { text: "D. A forwarder configuration.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How do you display only the events with status=404 in Splunk?",
    type: "single",
    answers: [
      { text: "A. search status=404", correct: true, explain: "Correct! search status=404 filters for status 404 events." },
      { text: "B. stats status=404", correct: false, explain: "Incorrect." },
      { text: "C. rare status=404", correct: false, explain: "Incorrect." },
      { text: "D. table status=404", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the function of Splunk's Deployment Server?",
    type: "single",
    answers: [
      { text: "A. Distributes configuration files to clients.", correct: true, explain: "Correct! Deployment Server manages configs." },
      { text: "B. Stores and indexes data.", correct: false, explain: "Incorrect." },
      { text: "C. Runs scheduled searches.", correct: false, explain: "Incorrect." },
      { text: "D. Manages knowledge objects.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk role has the most permissions by default?",
    type: "single",
    answers: [
      { text: "A. Power", correct: false, explain: "Incorrect. Admin has more rights." },
      { text: "B. Admin", correct: true, explain: "Correct! Admin has full permissions." },
      { text: "C. User", correct: false, explain: "Incorrect." },
      { text: "D. Viewer", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field in Splunk contains the name of the source host?",
    type: "single",
    answers: [
      { text: "A. host", correct: true, explain: "Correct! host field contains source host." },
      { text: "B. source", correct: false, explain: "Incorrect." },
      { text: "C. sourcetype", correct: false, explain: "Incorrect." },
      { text: "D. _time", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk component provides a graphical user interface for search and visualization?",
    type: "single",
    answers: [
      { text: "A. Search head", correct: true, explain: "Correct! Search head provides the GUI." },
      { text: "B. Indexer", correct: false, explain: "Incorrect." },
      { text: "C. Forwarder", correct: false, explain: "Incorrect." },
      { text: "D. Deployment server", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk table command do?",
    type: "single",
    answers: [
      { text: "A. Displays search results as a table with only specified fields.", correct: true, explain: "Correct! table formats results as a table." },
      { text: "B. Summarizes numeric data.", correct: false, explain: "Incorrect. stats summarizes data." },
      { text: "C. Removes duplicate events.", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "D. Sorts results by time.", correct: false, explain: "Incorrect. sort does that." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the primary function of the Splunk rare command?",
    type: "single",
    answers: [
      { text: "A. Returns the least common values of a field.", correct: true, explain: "Correct! rare returns least common values." },
      { text: "B. Finds the most common values.", correct: false, explain: "Incorrect. top finds most common." },
      { text: "C. Filters out events with null values.", correct: false, explain: "Incorrect." },
      { text: "D. Schedules reports.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk 'fields' command do?",
    type: "single",
    answers: [
      { text: "A. Selects which fields are displayed in results.", correct: true, explain: "Correct! fields limits shown fields." },
      { text: "B. Removes duplicate fields.", correct: false, explain: "Incorrect." },
      { text: "C. Creates new fields.", correct: false, explain: "Incorrect. eval creates new fields." },
      { text: "D. Hides search commands.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is the main purpose of Splunk search modes?",
    type: "single",
    answers: [
      { text: "A. Adjust search speed and field discovery.", correct: true, explain: "Correct! Modes balance speed and field discovery." },
      { text: "B. Index more data.", correct: false, explain: "Incorrect." },
      { text: "C. Increase GUI performance.", correct: false, explain: "Incorrect." },
      { text: "D. Schedule reports.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which of the following is a best practice for writing efficient Splunk searches?",
    type: "single",
    answers: [
      { text: "A. Filter and narrow results as early as possible.", correct: true, explain: "Correct! Filter early for efficiency." },
      { text: "B. Use as many wildcards as possible.", correct: false, explain: "Incorrect." },
      { text: "C. Use dedup at the start of every search.", correct: false, explain: "Incorrect." },
      { text: "D. Run all searches in Verbose Mode.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How do you filter for events where status=200 and method=GET?",
    type: "single",
    answers: [
      { text: "A. status=200 method=GET", correct: true, explain: "Correct! Both filters applied together." },
      { text: "B. status==200 && method==GET", correct: false, explain: "Incorrect. Not Splunk syntax." },
      { text: "C. status:200 OR method:GET", correct: false, explain: "Incorrect." },
      { text: "D. status eq 200 method eq GET", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command is used to create new fields based on regular expression patterns?",
    type: "single",
    answers: [
      { text: "A. rex", correct: true, explain: "Correct! rex creates fields from regex." },
      { text: "B. eval", correct: false, explain: "Incorrect. eval is for calculated fields." },
      { text: "C. stats", correct: false, explain: "Incorrect. stats summarizes." },
      { text: "D. dedup", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk feature helps visualize event data?",
    type: "single",
    answers: [
      { text: "A. Dashboards", correct: true, explain: "Correct! Dashboards visualize data." },
      { text: "B. Deployment server", correct: false, explain: "Incorrect." },
      { text: "C. Indexer", correct: false, explain: "Incorrect." },
      { text: "D. Forwarder", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which field identifies the Splunk index that stores an event?",
    type: "single",
    answers: [
      { text: "A. index", correct: true, explain: "Correct! index field shows the storage index." },
      { text: "B. sourcetype", correct: false, explain: "Incorrect." },
      { text: "C. host", correct: false, explain: "Incorrect." },
      { text: "D. source", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk role can schedule alerts by default?",
    type: "single",
    answers: [
      { text: "A. Admin", correct: true, explain: "Correct! Admin can schedule alerts." },
      { text: "B. Power", correct: true, explain: "Correct! Power can schedule alerts." },
      { text: "C. User", correct: false, explain: "Incorrect. User cannot schedule alerts by default." },
      { text: "D. Viewer", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What is a Splunk lookup table?",
    type: "single",
    answers: [
      { text: "A. A CSV or KV store file that maps data for enrichment.", correct: true, explain: "Correct! Lookups enrich event data." },
      { text: "B. An index.", correct: false, explain: "Incorrect." },
      { text: "C. A search head.", correct: false, explain: "Incorrect." },
      { text: "D. A dashboard.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk search command removes unwanted fields from results?",
    type: "single",
    answers: [
      { text: "A. fields - <field>", correct: true, explain: "Correct! fields - removes fields from results." },
      { text: "B. dedup <field>", correct: false, explain: "Incorrect." },
      { text: "C. table <field>", correct: false, explain: "Incorrect. table displays specific fields." },
      { text: "D. sort <field>", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How can you group results by multiple fields in Splunk?",
    type: "single",
    answers: [
      { text: "A. stats count by field1 field2", correct: true, explain: "Correct! stats ... by field1 field2 groups by both." },
      { text: "B. table field1 field2", correct: false, explain: "Incorrect. table displays fields, does not group." },
      { text: "C. dedup field1 field2", correct: false, explain: "Incorrect." },
      { text: "D. search field1 field2", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command would you use to find the maximum value of a field?",
    type: "single",
    answers: [
      { text: "A. max(field)", correct: true, explain: "Correct! max(field) finds the highest value." },
      { text: "B. stats sum(field)", correct: false, explain: "Incorrect. sum finds the total." },
      { text: "C. dedup field", correct: false, explain: "Incorrect. dedup removes duplicates." },
      { text: "D. top field", correct: false, explain: "Incorrect. top finds most common values." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which search command displays the rarest values of a field?",
    type: "single",
    answers: [
      { text: "A. rare", correct: true, explain: "Correct! rare shows least common values." },
      { text: "B. top", correct: false, explain: "Incorrect. top shows most common." },
      { text: "C. table", correct: false, explain: "Incorrect. table formats data." },
      { text: "D. stats", correct: false, explain: "Incorrect. stats summarizes data." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which command in Splunk is used to calculate the sum of values for a field?",
    type: "single",
    answers: [
      { text: "A. stats sum(field)", correct: true, explain: "Correct! stats sum(field) adds up values." },
      { text: "B. eval sum(field)", correct: false, explain: "Incorrect." },
      { text: "C. table field", correct: false, explain: "Incorrect." },
      { text: "D. sort field", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "How can you limit Splunk results to show only 20 events?",
    type: "single",
    answers: [
      { text: "A. head 20", correct: true, explain: "Correct! head 20 limits to 20 results." },
      { text: "B. dedup 20", correct: false, explain: "Incorrect." },
      { text: "C. table 20", correct: false, explain: "Incorrect." },
      { text: "D. rare 20", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "Which Splunk command shows the average value of a numeric field?",
    type: "single",
    answers: [
      { text: "A. stats avg(field)", correct: true, explain: "Correct! stats avg(field) returns average." },
      { text: "B. dedup field", correct: false, explain: "Incorrect." },
      { text: "C. rare field", correct: false, explain: "Incorrect." },
      { text: "D. sum(field)", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  },
  {
    q: "What does the Splunk 'sort' command do?",
    type: "single",
    answers: [
      { text: "A. Orders search results based on specified fields.", correct: true, explain: "Correct! sort arranges results." },
      { text: "B. Removes fields.", correct: false, explain: "Incorrect." },
      { text: "C. Calculates averages.", correct: false, explain: "Incorrect." },
      { text: "D. Extracts fields.", correct: false, explain: "Incorrect." }
    ],
    selected: [],
    flagged: false,
    skipped: false
  }
,
{
  q: "Will the queries following below get the same result?\n1. index=log sourcetype=error_log status !=100\n2. index=log sourcetype=error_log NOT status =100",
  type: "single",
  answers: [
    { text: "A. Yes", correct: false, explain: "Incorrect. The logic is different for != and NOT in Splunk." },
    { text: "B. No", correct: true, explain: "Correct! They do not return the same results." }
  ],
  selected: [],
  flagged: false,
  skipped: false
},
{
  q: "Select the best options for 'search best practices' in Splunk: (Choose five.)",
  type: "multi",
  answers: [
    { text: "A. Select the time range always.", correct: true, explain: "Correct! Always select a time range for efficiency." },
    { text: "B. Try to specify index values.", correct: true, explain: "Correct! Specify index for faster searches." }
  ],
  },
]