## How to Deploy and Test
Follow these instructions precisely to deploy this application and verify

### Step 1: Fork this Repository

### Step 2: Create the Azure Static Web App Resource

### Step 3: Configure and Run the Azure DevOps Pipeline
1. Go to your Azure DevOps project.
2. Navigate to Pipelines and click Create Pipeline (or New pipeline).
3. On the "Where is your code?" screen, select GitHub. Authenticate if necessary and select your forked repository.
4. On the "Configure your pipeline" screen, select Existing Azure Pipelines YAML file.
5. Set the path to the existing file: /devops/pipeline.yml and click Continue.
6. You will now see a review of the pipeline YAML. Do not run it yet. Click the Variables button in the top-right corner.
7. Click New variable: deployment_token and paste the token from Azure SWA
8. Now, click Run pipeline to trigger the deployment. The pipeline will build the Nuxt.js app and deploy it to your SWA resource using the token.

### Step 4: Test and Verify
