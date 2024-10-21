*Question 1*


From: marissa@startup.com
Subject:  Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,
Marissa



--

**From:** augustine@algolia.com

**Subject:** Re: Feedback on Dashboard Design

Hello Marissa,

Thank you for reaching out, I appreciate your honest feedback about the new dashboard design. I understand that having quick access to clear and delete indexes is essential for your workflow, especially during iterations.

While the new layout may seem less convenient, you might consider using the Algolia API for programmatic management of your indices. This allows you to clear or delete indexes quickly without navigating through the UI.

Here is a link to the relevant documentation for managing indices programmatically: [Manage Your Indices](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/). If you would like, I can also provide sample code to get you started.

Please let me know if this helps or if you have further questions!

Best regards,
Augustine Osagie
Customer Success Engineer @ Algolia

---

*Question 2*:

From: carrie@coffee.com
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.


--

**From:** augustine@algolia.com

**Subject:** Re: URGENT: PRODUCTION ISSUE!!!

Hi Carrie,

Thank you for reaching out regarding the critical issue your users are experiencing. I understand how important it is to resolve this promptly.

The error message your users are encountering indicates that the records they are trying to submit exceed the size limit for your current plan. Given that you enrich each record with additional metadata, I recommend evaluating whether some of this data can be reduced or excluded from the submission process.

You can find more information about the record size limitations in our documentation here: [Record Size Limitations](https://support.algolia.com/hc/en-us/articles/4406981897617-Is-there-a-size-limit-for-my-index-records-).

If adjusting the metadata is not feasible, I’m here to help explore other solutions. Please let me know how you’d like to proceed or if you need further assistance.

Warm regards,
Augustine Osagie
Customer Success Engineer @ Algolia

---

*Question 3*:


From: marc@hotmail.com
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

--

**From:** augustine@algolia.com

**Subject:** Re: Website Error

Good Morning Marc,

Thank you for bringing this issue to our attention. I understand that an error can be quite frustrating, and I'm here to help you resolve it.

The error message you've shared indicates that your 'searchkit' variable may not be defined. This is often due to environment variables not being properly loaded from your `.env` file during the build process.

Here are a few steps you can take:
1. Ensure that all necessary environment variables are correctly defined in your `.env` file.
2. Verify that your build process is correctly configured to load these variables.

If you need further assistance or would like to go through this together, I'm available for a call at your convenience. Just let me know what works for you!

Kindly,
Augustine Osagie
Customer Success Engineer @ Algolia

---

