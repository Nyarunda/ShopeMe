# Generated by Django 3.1 on 2020-08-13 07:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_auto_20200813_0747'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customer',
            old_name='fname',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='lname',
        ),
    ]
