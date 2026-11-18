# Release process

1. Every change goes through a pull request with green checks.
2. Tag the release on main as vYYYY.MM.DD-N.
3. Deploy to preview first and run the smoke tests against it.
4. Watch the error rate for 30 minutes before promoting to production.
5. Promote with the release workflow; never deploy from a laptop.
6. Write a one-paragraph release note: what changed, who it affects, how to roll back.
7. Rolling back means redeploying the previous tag, not reverting in production.
8. Freeze windows: no releases from Friday 14:00 to Monday 09:00 local time, or during the holiday peak (Nov 20 to Dec 31) without the on-call lead's approval.
9. Database migrations ship one release before the code that needs them.
10. Feature flags are removed within two releases of reaching 100%.
