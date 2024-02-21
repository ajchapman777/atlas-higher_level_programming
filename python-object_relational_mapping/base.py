Module is documented
[exec_bash] Command to run:
timeout 30 bash -c 'python3 -c "d = __import__(\"8-model_state_fetch_first\").__doc__ ; r = \"OK\n\" if d is not None and len(d.strip()) > 0 else \"\" ; print(r, end=\"\")" | wc -l'
[exec_bash] Return code: 0
[exec_bash] Actual stdout:
0
[exec_bash] Actual stdout length: 2
[exec_bash] Actual stderr:
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/root/student_repo/python-object_relational_mapping/8-model_state_fetch_first.py", line 5, in <module>
    from model_state import Base, State
  File "/root/student_repo/python-object_relational_mapping/model_state.py", line 5, in <module>
    from model_state import Base, State
ImportError: cannot import name 'Base' from partially initialized module 'model_state' (most likely due to a circular import) (/root/student_repo/python-object_relational_mapping/model_state.py)
[exec_bash] Actual stderr length: 557
