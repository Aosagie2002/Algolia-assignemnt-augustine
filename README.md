# Algolia Solutions Assignment

This is the hiring assignment for the Customer Solutions Team at Algolia. It’s intended to mimic work you might do here, while giving us an understanding of your skills in:

* Coding
* Problem Solving
* Communication

If you want to know how we will judge the assignment, you can view our scoring rubric.

## Brief
Spencer and Williams have provided us with raw product data and a repo of their front end code. They have asked us for help to enhance their implementation and have asked that we create an Algolia application to demonstrate this to them.

### Technical Assignment - Part One (1 hrs)
Spencer and Williams are having a sale on Cameras. They would like you create and run a demo script that reduces the price of everything in the camera category by 20% and then round to the lowest full number. They have provided the raw data as products.json . The data should be transformed and sent to algolia in a single script.

### Summary
In **Part One** of the assignment, I created a Node.js script that automates applying discounts to products in a specific category and uploading the updated data to Algolia. Here’s a quick rundown of what I accomplished:
1. **Loading Product Data**:
- The script reads product details from a user-specified JSON file (`products.json`). You can easily provide the file path using command-line arguments (`-f` or `--file`).

2. **Applying Discounts**:
- I created a function called `applyCategoryDiscount` that applies a **20% discount** to all products in the **Cameras & Camcorders** category or any category you choose.
- Prices are rounded down to the nearest whole number, and the script logs how many products received the discount.

3. **Uploading to Algolia**:
- Once the product data is updated, the script uploads it to an Algolia index using the Algolia API. This ensures that the new pricing is searchable and accessible for the front-end application.

4. **Configurable Options**:
- The script is designed to be flexible. Users can:
  - Specify a different file path for the product data.
  - Change the category for the discount.
  - Adjust the discount percentage.
  - Configure Algolia index settings to enhance search relevance.

5. **Error Handling**:
- I included error handling for reading the product data file and during the upload process to Algolia. This way, the script runs smoothly even if something goes wrong.

### Potential Improvements

1. **Clear the Algolia Index Before Upload**:
- It’d be great to add an option that clears the existing Algolia index before uploading new data. This way, every time the script runs, it starts fresh without any leftover data from previous uploads.

2. **Dynamic Sale Criteria**:
- Allowing sales to be applied based on other factors, such as the current price of products or their ratings, would let us target specific items more effectively.

3. **Better Error Checking**:
- Adding extra error checking for command-line arguments would be helpful. For example, we could validate that the specified category actually exists in the dataset and ensure that the file path is valid. Additionally, confirming that the discount percentage is within a sensible range (like 0-100%) would be a good safety net.

4. **Improved Logging**:
- Enhancing the logging to include more details, such as timestamps and different severity levels (like info, warning, and error), would make it easier to troubleshoot any issues that arise during execution.

5. **Configurable Discount Rates**:
- Instead of sticking to a single discount, we could allow users to set different discount rates for various categories directly from the command line or through a config file. This would make the script more flexible.

6. **User Feedback Mechanism**:
- Implementing a feedback feature would be super useful! Users could share their experiences and suggestions, helping us refine the discount application process over time.

### Technical Assignment - Part Two (2 hrs)
Our customer Spencer and Williams want to use Personalisation in order to to do this they need to implement **_Algolia Insights_** . They have asked for us to create a demo of the events included in their provided codebase.

It is imperative that we send clicks and conversion on the result page hit results, any other events included will be a bonus.

### Summary
For part two of the assignment, I implemented **Algolia Insights** to track user clicks and conversions on the Spencer & Williams results page. This integration helps us understand how users interact with our products, allowing us to gather valuable data on engagement.

**Event Tracking**:
- I set up a **click event** for the 'View' button, so we can see when users are interested in a product.
- I also configured a **conversion event** for the 'Add To Cart' button, which helps us track when users decide to add items to their cart.

Every time a user clicks one of these buttons, the corresponding event is sent to Algolia, giving us insights into user behavior.

## Potential Improvements

1. **Personalized Recommendations**:
- We could set up a recommendation engine that suggests products to users based on their past behavior, clicks, and conversions. By using Algolia's insights, we can provide tailored suggestions that enhance the user experience and drive sales.

2. **Enhanced User Segmentation**:
- Developing more advanced user segmentation based on demographic data and interaction history could really help us. This would allow us to personalize our marketing efforts and showcase products that resonate better with specific user groups, ultimately improving engagement and conversion rates.

3. **Real-Time Analytics Dashboard**:
- Creating a real-time analytics dashboard for the product team would be a game changer. It would let us monitor user interactions, click-through rates, and conversion rates at a glance, helping us quickly identify trends and make data-driven decisions to optimize product listings and marketing strategies.

4. **A/B Testing for Product Features**:
- We should think about implementing A/B testing to experiment with different layouts, product descriptions, and call-to-action buttons. By analyzing how different approaches perform, we can figure out which changes lead to better user engagement and higher conversion rates.

5. **Feedback Loop Mechanism**:
- Setting up a feedback loop would be super helpful! It would allow users to easily share their thoughts on their experience with the product results page. Quick surveys or prompts after certain actions could work well. Analyzing this feedback will help us identify pain points and areas for improvement, ultimately leading to a better overall customer experience.

6. **Ordering Products by Performance**:
- It might be useful to display items based on their average click and conversion rates. This way, we can highlight the products that users find most appealing.

7. **Highlighting Popular Items**:
- Adding a feature to show popular items based on clicks and conversions, tailored to users' demographics and locations, would really enhance the personalized shopping experience.


### Technical Assignment - Part Three (0.5 hrs)
Spencer and Williams want some guidance on their optimal relevance set up. In the Algolia index that you have uploaded the data and events to, configure the relevance so that when users are searching they are seeing the results that make most sense.

### Questions (0.5 hrs)

Please answer example customer questions in the questions directory.

### Debrief Call (Dependent on submission)

After submitting the assignment, we will we ask you to present the work that you have completed in a call with two members of the TAM team. This will be scheduled shortly after your submission of this assignment.

## Getting started

1. You'll need to sign up for an Algolia account @ https://www.algolia.com/users/sign_up.
2. You can find the product dataset in the data folder inside this repo. Feel free to use any language to perform the data transformation
3. To run the front end of the application you will need to add your app id, api key and index name to an environment file. Copy .env.test and rename it .env adding the credentials as needed. Once added run `npm install` & `npm start` to see the UI

Everything you need to complete this assignment can be found on algolia.com/docs.

## How to submit
1. Push your code into a [code sandbox](https://codesandbox.io/) and share it with us
2. Reply to our email with a link to your code sandbox, and anything else you think is applicable
3. Provide us with [support access](https://algolia.com/account/support/) to your algolia account

## Scoring Rubric

### Technical Assignment

| Did the candidate: | Yes | No |
| :------------- | :------------- | :------------- |
| Follow the instructions of the assignment? | | |
| Write code that follows best-practices? | | |
| Avoid over-engineering? | | |
| Demonstrate understanding of the code they wrote? | | |
| Demonstrate good code and process organization? | | |
| Complete the assignment in an efficient manner? | | |
| Ask for clarification when necessary? | | |

### “Customer” Questions

| Did the candidate: | Yes | No |
| :------------- | :------------- | :------------- |
| Answer the questions correctly? | | |
| Answer in a succinct manner? | | |
| Have minimal spelling, grammar, or formatting mistakes? | | |
| Employ a friendly, helpful tone? | | | |

### Overall Impressions

| Does the candidate demonstrate being in the top 10% of: | Yes | No |
| :------------- | :------------- | :------------- |
| Technical aptitude | | |
| Problem Solving | | |
| Communication skills | | | |
